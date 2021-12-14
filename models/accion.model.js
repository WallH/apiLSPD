const { Schema } = require("mongoose");

module.exports = mongoose => {
    const Accion = mongoose.model(
        "accion",
        mongoose.Schema(
            {
                nombre: {type:String, required: true},
                descripcion: {type: String, required: true},
            }
        )
    );

    return Accion;
};