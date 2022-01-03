const GradoSancionController = require("../../controllers/gradosancion.controller");
const AuthMiddleware = require("../../middlewares/auth.middleware");
const PermissionMiddleware = require("../../middlewares/permisos.middleware");
/*const AvanceValidator = require("./validators/cruds/avance.validator");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permission.middleware");
const Validator = require("./validators");*/
module.exports = app =>
{
    var router = require("express").Router();
    //router.get("/publicos", GradoSancionController.getAllPublicos);
    router.get("/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('gradosancion.obtener'), GradoSancionController.getAll); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador'])
    router.get("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('gradosancion.obtener.id'), /*AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate,*/ GradoSancionController.getByIDParam);
    router.post("/filter/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('gradosancion.buscar'), GradoSancionController.getByFilter);
    router.post("/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('gradosancion.nuevo'),/* AvanceValidator.createAvanceValidation(), Validator.validate,*/ GradoSancionController.post);
    router.put("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('gradosancion.editar'), GradoSancionController.put);
    router.delete("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('gradosancion.eliminar'), /*AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate, */GradoSancionController.delete);
    app.use("/api/gradosanciones", router);
}
