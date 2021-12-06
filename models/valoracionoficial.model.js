const { Schema } = require("mongoose");
module.exports = mongoose => {
    const ValoracionOficial = mongoose.model(
        "valoracionoficial",
        mongoose.Schema(
            {
                oficial: {type:Schema.Types.ObjectId, required: true},
                encargado: {type:Schema.Types.ObjectId, required: true},
                puntuacion: {type:Number, required: true},
                observacion: {type:String, required:true},
                fecha_avance: {type:Date, required: true} 
            }
        )
    );

    return ValoracionOficial;
};