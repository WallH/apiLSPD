const { Schema } = require("mongoose");
module.exports = mongoose => {
    const Rango = mongoose.model(
        "rango",
        mongoose.Schema(
            {
                nombre: {type:String, required: true},
            }
        )
    );

    return Rango;
};