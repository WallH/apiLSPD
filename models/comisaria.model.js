const { Schema } = require("mongoose");

module.exports = mongoose => {
    const Comisaria = mongoose.model(
        "comisaria",
        mongoose.Schema(
            {
                nombre: {type:String, required: true},
                indicativo: {type: String, required: true},
            }
        )
    );

    return Comisaria;
};