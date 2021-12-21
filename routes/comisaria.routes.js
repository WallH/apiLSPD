const ComisariaController = require("../controllers/comisaria.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
/*const AvanceValidator = require("./validators/cruds/avance.validator");
const AuthMiddleware = require("../middlewares/auth.middleware");
const PermissionMiddleware = require("../middlewares/permission.middleware");
const Validator = require("./validators");*/
module.exports = app =>
{
    var router = require("express").Router();
    //router.get("/publicos", ComisariaController.getAllPublicos);
    router.get("/", AuthMiddleware.userIsLoggedIn, ComisariaController.getAll); //AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador'])
    router.get("/:id", AuthMiddleware.userIsLoggedIn, AuthMiddleware.userIsWall, /*PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate,*/ ComisariaController.getByIDParam);
    //router.post("/filter/", AuthMiddleware.userIsLoggedIn, PermissionMiddleware.userCan(['administrador', 'entrenador']),*/ ComisariaController.getByFilter);
    router.post("/", AuthMiddleware.userIsLoggedIn, AuthMiddleware.userIsWall, /*PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.createAvanceValidation(), Validator.validate,*/ ComisariaController.post);
    router.put("/:id", AuthMiddleware.userIsLoggedIn, AuthMiddleware.userIsWall,/*PermissionMiddleware.userCan(['administrador', 'entrenador']),*/ ComisariaController.put);
    router.delete("/:id", AuthMiddleware.userIsLoggedIn, AuthMiddleware.userIsWall,/*PermissionMiddleware.userCan(['administrador', 'entrenador']), AvanceValidator.getOrDeleteSpecificAvance(), Validator.validate, */ComisariaController.delete);
    app.use("/api/comisaria", router);
}
