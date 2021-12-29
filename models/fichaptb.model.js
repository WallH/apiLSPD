const { Schema } = require("mongoose");
module.exports = mongoose => {
    const FichaPTB = mongoose.model(
        "fichaptb",
        mongoose.Schema(
            {
                oficial: {type:Schema.Types.ObjectId, required: true},
                encargado: {type:Schema.Types.ObjectId, required: true},
                puntuacion: {type:Number, required: true},
                rangodurante: {type:String, required: true},
                desempeno: {type:String, required:true},
                psicologia: {type:String, required:false},
                promovible: {type:Boolean, required:true},
                fecha: {type:Date, required: true} 
            }
        )
    );

    return FichaPTB;
};