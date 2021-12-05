const db = require("../models");
const { encryptPassword } = require("./encrypt.dataworker");
const UsuarioRepository = db.usuario;

const RangoRepository = db.rango;

exports.getByNombreUsuario = async(nombre_usuario) =>
{
    return await UsuarioRepository.find({
        'nombre_usuario': nombre_usuario
    });
}

exports.existsNombreUsuario = async(nombre_usuario)=>
{
    return ((await this.getByNombreUsuario(nombre_usuario))[0] ?? null) != null;
}

exports.getByID = async(id)=>
{
    return await UsuarioRepository.findById(id);
}

exports.getAll = async()=>
{
    return await UsuarioRepository.find().populate({
        path: 'rango',
        model: RangoRepository
    });
}

exports.getByFilter = async(filter)=>
{
    return await UsuarioRepository.find(filter);
}

exports.newUsuario = async(data)=>
{
    console.log(data.clave);
    data.clave = encryptPassword(data.clave);
    const ret = new UsuarioRepository(
        {
            ...data
        }
    )
    console.log(ret);
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
    if(data.clave !== undefined) data.clave = encryptPassword(data.clave);
    const ret = await UsuarioRepository.findByIdAndUpdate(id, {...data});
    return ret;
}