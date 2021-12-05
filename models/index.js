const { mongoURL } = require("../config/dbmongo.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = mongoURL;
db.rango = require("./rango.model")(mongoose);
db.usuario = require("./usuario.model")(mongoose);
//db.tokenlogin = require("./tokenlogin.model")(mongoose);
module.exports = db;