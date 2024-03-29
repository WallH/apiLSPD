const db = require("../models");
const { encryptPassword } = require("./encrypt.dataworker");
const UsuarioRepository = db.usuario;
const ComisariaRepository = db.comisaria;
const RangoRepository = db.rango;

exports.getByNombreUsuario = async(nombre_usuario) =>
{
    return await UsuarioRepository.find({
        'nombre_usuario': nombre_usuario
    }).populate({path:'rango', model:RangoRepository });
}

exports.existsNombreUsuario = async(nombre_usuario)=>
{
/*    console.log(nombre_usuario);
    let retUser = (await this.getByNombreUsuario(nombre_usuario))[0];
    console.log(retUser);*/
    return ((await this.getByNombreUsuario(nombre_usuario))[0] ?? null) != null;
}

exports.getByID = async(id)=>
{
    return await UsuarioRepository.findById(id).populate({
        path:'rango',
        model: RangoRepository
    }).select('-clave');
}

exports.getAll = async()=>
{
    return await UsuarioRepository.find().populate({
        path: 'rango',
        model: RangoRepository
    })
    .populate({path:'comisaria', model: ComisariaRepository})
    .select('-clave');
}

exports.getByFilter = async(filter)=>
{
    return await UsuarioRepository.find(filter).select('-clave');
}

exports.newUsuario = async(data)=>
{
    data.clave = encryptPassword(data.clave);
    const ret = new UsuarioRepository(
        {
            ...data
        }
    )
    return await ret.save();
}

exports.deleteUsuario = async(id)=>
{
    const ret = await UsuarioRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    if(data.clave?.trim() == "") delete data["clave"];
    if(data.clave !== undefined) data.clave = encryptPassword(data.clave);
    const ret = await UsuarioRepository.findByIdAndUpdate(id, {...data}).select('-clave');
    return ret;
}