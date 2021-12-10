const { Schema } = require("mongoose");
module.exports = mongoose => {
    const Token = mongoose.model(
      "token",
      mongoose.Schema(
        {
          token: {type:String, required:true},
          fecha: {type:Date, required: true},
          ip: {type:String, required: true},
          usuario: {type: Schema.Types.ObjectId, ref:'usuario', required:true},
          activo: {type:Boolean, required:true}
        }
      )
    );
  
    return Token;
  };