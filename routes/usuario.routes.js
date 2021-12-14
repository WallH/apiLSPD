const UsuarioController = require("../controllers/usuario.controller");
const PermissionMiddleware = require("../middlewares/permisos.middleware");
const AuthMiddleware = require("../middlewares/auth.middleware");
/*const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permission.middleware");
const Validator = require("./validators");
const UsuarioValidator = require("./validators/cruds/usuario.validator");*/
module.exports = app =>
{
    var router = require("express").Router();
    router.get("/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('usuario.obtener'), UsuarioController.getAll); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador'])
    router.get("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('usuario.obtener.id'), UsuarioController.getByIDParam);
    router.post("/filter/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('usuario.buscar'), UsuarioController.getByFilter);
    router.post("/", /*UsuarioValidator.newUsuarioValidation(), Validator.validate,*/ AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('usuario.nuevo'), UsuarioController.post);
    router.put("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('usuario.editar'), /*UsuarioValidator.editUsuarioValidation(), Validator.validate,*/ UsuarioController.put);
    router.delete("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('usuario.eliminar'), UsuarioController.delete);
    app.use("/api/usuario", router);
}
