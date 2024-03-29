const { mongoURL } = require("../config/dbmongo.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = mongoURL;
db.accion = require("./accion.model")(mongoose);
db.comisaria = require("./comisaria.model")(mongoose);
db.permisos = require("./permisos.model")(mongoose);
db.permisosendpoint = require("./permisosendpoint.model")(mongoose);
db.rango = require("./rango.model")(mongoose);
db.usuario = require("./usuario.model")(mongoose);
db.valoracionoficial = require("./valoracionoficial.model")(mongoose);
db.tokenlogin = require("./tokenlogin.model")(mongoose);
db.fichaptb = require("./fichaptb.model")(mongoose);
db.gradosancion = require("./gradosancion.model")(mongoose);
db.sancion = require("./sancion.model")(mongoose);

module.exports = db;