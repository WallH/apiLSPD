const RangoController = require("../controllers/rango.controller");
/*const AvanceValidator = require("./validators/cruds/avance.validator");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permission.middleware");
const Validator = require("./validators");*/
module.exports = app =>
{
    var router = require("express").Router();
    //router.get("/publicos", RangoController.getAllPublicos);
    router.get("/", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']), */RangoController.getAll); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador'])
    router.get("/:id", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate,*/ RangoController.getByIDParam);
    router.post("/filter/", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']),*/ RangoController.getByFilter);
    router.post("/", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.createAvanceValidation(), Validator.validate,*/ RangoController.post);
    router.put("/:id", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']),*/ RangoController.put);
    router.delete("/:id", /*AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate, */RangoController.delete);
    app.use("/api/rango", router);
}
