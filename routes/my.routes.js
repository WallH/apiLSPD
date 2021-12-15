const ValoracionOficialController = require("../controllers/valoracionoficial.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permisos.middleware");
module.exports = app =>
{
    var router = require("express").Router();
    router.get("/ficha", AuthMiddleware.userIsLoggedIn, /*PermissionMiddleware.userCan(['alumno']),*/ ValoracionOficialController.getMy); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['alumno'])
    app.use("/api/my", router);
}