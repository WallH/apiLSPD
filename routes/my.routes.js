const ValoracionOficialController = require("../controllers/valoracionoficial.controller");
const FichaPTBController = require("../controllers/ptb/fichaptb.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permisos.middleware");
const UsuarioController = require("../controllers/usuario.controller");
module.exports = app =>
{
    var router = require("express").Router();
    router.get("/ficha", AuthMiddleware.userIsLoggedIn, /*PermissionMiddleware.userCan(['alumno']),*/ ValoracionOficialController.getMy); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['alumno'])
    router.get("/fichaptb", AuthMiddleware.userIsLoggedIn, /*PermissionMiddleware.userCan(['alumno']),*/ FichaPTBController.getMy); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['alumno'])
    router.put("/password", AuthMiddleware.userIsLoggedIn, UsuarioController.changePassword);
    app.use("/api/my", router);
}