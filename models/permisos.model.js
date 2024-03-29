const { Schema } = require("mongoose");
module.exports = mongoose => {
    const Permisos = mongoose.model(
        "permisos",
        mongoose.Schema(
            {
                rango: {type:Schema.Types.ObjectId, required: true},
                acciones: [{type: Schema.Types.ObjectId, ref:'accion',required: true}],
            }
        )
    );

    return Permisos;
};