const ValoracionOficialController = require("../controllers/valoracionoficial.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permisos.middleware");
/*const AvanceValidator = require("./validators/cruds/avance.validator");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permission.middleware");
const Validator = require("./validators");*/
module.exports = app =>
{
    var router = require("express").Router();
    //router.get("/publicos", ValoracionOficialController.getAllPublicos);
    router.get("/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('ficha.obtener'), ValoracionOficialController.getAll); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador'])
    router.get("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('ficha.obtener.id'), /*AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate,*/ ValoracionOficialController.getByIDParam);
    router.post("/filter/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('ficha.buscar'), ValoracionOficialController.getByFilter);
    router.post("/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('ficha.nuevo'),/* AvanceValidator.createAvanceValidation(), Validator.validate,*/ ValoracionOficialController.post);
    router.put("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('ficha.editar'), ValoracionOficialController.put);
    router.delete("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('ficha.eliminar'), /*AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate, */ValoracionOficialController.delete);
    app.use("/api/valoracionoficial", router);
}
