const AccionesController = require("../controllers/acciones.controller");
/*const AvanceValidator = require("./validators/cruds/avance.validator");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permission.middleware");
const Validator = require("./validators");*/
module.exports = app =>
{
    var router = require("express").Router();
    //router.get("/publicos", AccionesController.getAllPublicos);
    router.get("/", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']), */AccionesController.getAll); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador'])
    // router.get("/:id", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate,*/ AccionesController.getByIDParam);
    // router.post("/filter/", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']),*/ AccionesController.getByFilter);
    // router.post("/", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.createAvanceValidation(), Validator.validate,*/ AccionesController.post);
    // router.put("/:id", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']),*/ AccionesController.put);
    // router.delete("/:id", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate, */AccionesController.delete);
    app.use("/api/acciones", router);
}
