const { Schema } = require("mongoose");
module.exports = mongoose => {
    const GradoSancion = mongoose.model(
        "gradosancion",
        mongoose.Schema(
            {
                nombre: {type:String, required: true},
                dias: {type:Number, required: true}
            }
        )
    );

    return GradoSancion;
};