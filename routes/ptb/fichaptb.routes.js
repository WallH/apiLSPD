const FichaPTBController = require("../../controllers/ptb/fichaptb.controller");
const AuthMiddleware = require("../../middlewares/auth.middleware");
const PermissionMiddleware = require("../../middlewares/permisos.middleware");
/*const AvanceValidator = require("./validators/cruds/avance.validator");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permission.middleware");
const Validator = require("./validators");*/
module.exports = app =>
{
    var router = require("express").Router();
    router.get("/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('fichaptb.obtener'), FichaPTBController.getAll); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador'])
    router.get("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('fichaptb.obtener.id'), /*AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate,*/ FichaPTBController.getByIDParam);
    router.post("/filter/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('fichaptb.buscar'), FichaPTBController.getByFilter);
    router.post("/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('fichaptb.nuevo'),/* AvanceValidator.createAvanceValidation(), Validator.validate,*/ FichaPTBController.post);
    router.put("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('fichaptb.editar'), FichaPTBController.put);
    router.delete("/:id", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan('fichaptb.eliminar'), /*AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate, */FichaPTBController.delete);
    app.use("/api/fichaptb", router);
}
