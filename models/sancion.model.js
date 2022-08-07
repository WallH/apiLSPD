const { Schema } = require("mongoose");
module.exports = mongoose => {
    const Sancion = mongoose.model(
        "sancion",
        mongoose.Schema(
            {
                oficial: {type:Schema.Types.ObjectId, required: true},
                supervisor: {type:Schema.Types.ObjectId, required: true},
                grado: {type:Schema.Types.ObjectId, required:true},
                observacion: {type:String, required:true},
                rangodurante: {type:String, required:true},
                fecha: {type:Date, required:true},
                anuladaporacumulacion: {type:Schema.Types.ObjectId},
                acumuladas: [{type:Schema.Types.ObjectId, ref:'sancion'}],
                fechaFin: {type:Date},
                degrado: {type:Boolean}
            }
        )
    );

    return Sancion;
};