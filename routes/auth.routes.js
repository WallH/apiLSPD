module.exports = app =>
{
    const AuthMiddleware = require("../middlewares/auth.middleware.js");

    const AuthController = require("../controllers/auth.controller");
    const AuthValidator = require("./validators/auth.validator");
    const JWTDataWorker = require("../dataworkers/jwt.dataworker");
    const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");
    const Validator = require("./validators/index");
    var router = require("express").Router();
    router.post('/login', AuthMiddleware.userIsNotLoggedIn, AuthValidator.tryLoginValidation(), Validator.validate, AuthController.loginAccount);
    router.get("/checklogin", async(req,res)=>
    {
        if(req.cookies.token && JWTDataWorker.IsValidToken(req.cookies.token) && await TokenDataWorker.isLegitToken(req.cookies.token))  
        {
            const UserRol = (await TokenDataWorker.getUserByToken(req.cookies.token)).rol;
            res.send({response: true, rol: UserRol});
            return ;    
        }
        res.send({response: false});
    });
    router.get("/logout", AuthMiddleware.userIsLoggedIn, AuthController.logoutAccount);
    app.use("/api/auth/", router); //El middleware controlará que a estas rutas solo pueda acceder si no se está logueado.
}