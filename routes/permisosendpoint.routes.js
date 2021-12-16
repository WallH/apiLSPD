const PermisosEndpointController = require("../controllers/permisosendpoint.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
/*const AvanceValidator = require("./validators/cruds/avance.validator");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permission.middleware");
const Validator = require("./validators");*/
module.exports = app =>
{
    var router = require("express").Router();
    //router.get("/publicos", PermisosEndpointController.getAllPublicos);
    router.get("/", AuthMiddleware.userIsLoggedIn, AuthMiddleware.userIsWall, /*PermissionMiddleware.userCan(['administrador', 'entrenador']), */PermisosEndpointController.getAll); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador'])
    router.get("/:id", AuthMiddleware.userIsLoggedIn, AuthMiddleware.userIsWall, /*PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate,*/ PermisosEndpointController.getByIDParam);
    //router.post("/filter/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']),*/ PermisosEndpointController.getByFilter);
    router.post("/", AuthMiddleware.userIsLoggedIn, AuthMiddleware.userIsWall, /*PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.createAvanceValidation(), Validator.validate,*/ PermisosEndpointController.post);
    router.put("/:id", AuthMiddleware.userIsLoggedIn, AuthMiddleware.userIsWall,/*PermissionMiddleware.userCan(['administrador', 'entrenador']),*/ PermisosEndpointController.put);
    router.delete("/:id", AuthMiddleware.userIsLoggedIn, AuthMiddleware.userIsWall,/*PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate, */PermisosEndpointController.delete);
    app.use("/api/permisosendpoint", router);
}
