const { Schema } = require("mongoose");

module.exports = mongoose => {
    const Usuario = mongoose.model(
        "usuario",
        mongoose.Schema(
            {
                nombre_usuario: { type: String, required: true },
                clave: { type: String, required: true },
                nombre: { type: String, required: true },
                apellido: { type: String, required: true },
                rango: { type: Schema.Types.ObjectId },
                activo: {type:Boolean, required: true}
            }
        )
    );

    return Usuario;
};