module.exports = app =>
{
    const AuthMiddleware = require("../middlewares/auth.middleware.js");

    const AuthController = require("../controllers/auth.controller");
    const AuthValidator = require("./validators/auth.validator");
    const JWTDataWorker = require("../dataworkers/jwt.dataworker");
    const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");
    const PermisosDataWorker = require("../dataworkers/permisos.dataworker");
    const db = require("../models");
    const PermisosRepository = db.permisos;
    const AccionesRepository = db.accion;
    const Validator = require("./validators/index");
    var router = require("express").Router();
    router.post('/login', AuthMiddleware.userIsNotLoggedIn, AuthValidator.tryLoginValidation(), Validator.validate, AuthController.loginAccount);
    router.get("/checklogin", async(req,res)=>
    {
        if(req.cookies.token && JWTDataWorker.IsValidToken(req.cookies.token) && await TokenDataWorker.isLegitToken(req.cookies.token))  
        {
            const UserRank = (await TokenDataWorker.getUserByToken(req.cookies.token)).rango;
            const PermisosRank = (await PermisosDataWorker.getByFilter({rango:UserRank}));//(await PermisosRepository.find({rango: UserRank}).populate({ path:'acciones', model:AccionesRepository }));
            res.send({response: true, rango: UserRank, permisos: PermisosRank?.acciones});
            return ;    
        }
        res.send({response: false});
    });
    router.get("/logout", AuthMiddleware.userIsLoggedIn, AuthController.logoutAccount);
    app.use("/api/auth/", router); //El middleware controlará que a estas rutas solo pueda acceder si no se está logueado.
}