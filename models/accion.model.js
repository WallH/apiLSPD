const { Schema } = require("mongoose");

module.exports = mongoose => {
    const Accion = mongoose.model(
        "accion",
        mongoose.Schema(
            {
                nombre: {type:String, required: true},
                descripcion: {type: Number, required: true},
            }
        )
    );

    return Accion;
};