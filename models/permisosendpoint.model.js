const { Schema } = require("mongoose");
module.exports = mongoose => {
    const PermisosEndpoint = mongoose.model(
        "permisosendpoint",
        mongoose.Schema(
            {
                endpoint: {type:String, required: true},
                acciones: [{type: Schema.Types.ObjectId, ref:'accion',required: true}],
            }
        )
    );

    return PermisosEndpoint;
};