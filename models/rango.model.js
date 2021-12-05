const { Schema } = require("mongoose");
module.exports = mongoose => {
    const Rango = mongoose.model(
        "alumno",
        mongoose.Schema(
            {
                nombre: {type:String, required: true},
            }
        )
    );

    return Rango;
};