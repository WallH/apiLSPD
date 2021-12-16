const PermisosController = require("../controllers/permisos.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permisos.middleware");
/*const AvanceValidator = require("./validators/cruds/avance.validator");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permission.middleware");
const Validator = require("./validators");*/
module.exports = app =>
{
    var router = require("express").Router();
    router.get("/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('permiso.obtener'), PermisosController.getAll); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador'])
    router.get("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('permiso.obtener.id'), /*AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate,*/ PermisosController.getByIDParam);
    router.post("/filter/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('permiso.buscar'), PermisosController.getByFilter);
    router.post("/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('permiso.nuevo'),/* AvanceValidator.createAvanceValidation(), Validator.validate,*/ PermisosController.post);
    router.put("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('permiso.editar'), PermisosController.put);
    router.delete("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('permiso.eliminar'), /*AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate, */PermisosController.delete);
    app.use("/api/permisos", router);
}