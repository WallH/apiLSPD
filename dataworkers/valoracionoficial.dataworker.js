const db = require("../models");
const ValoracionOficialRepository = db.valoracionoficial;
const UsuarioRepository = db.usuario;
const RangoRepository = db.rango;
exports.getByID = async(id)=>
{
    return await ValoracionOficialRepository.findById(id).populate('oficial')
/*    .populate('dieta')
    .populate({
        path: 'rutina',
        model: RutinaRepository,
        populate: [{path:'ejercicio', model: EjercicioRepository}]
    });*/
}

exports.getAll = async()=>
{
    return await ValoracionOficialRepository.find()
    .populate({
        path:'oficial',
        model: UsuarioRepository,
        populate: [{path:'rango', model: RangoRepository}]
    })
    .populate({
        path:'encargado',
        model: UsuarioRepository,
        populate: [{path:'rango', model: RangoRepository}]
    });
/*    .populate('dieta')
    .populate({
        path: 'rutina',
        model: RutinaRepository,
        populate: [{path:'ejercicio', model: EjercicioRepository}]
    })*/
    //.populate('rutina');
}

exports.getByFilter = async(filter)=>
{
    return await ValoracionOficialRepository.find(filter).populate({
        path:'oficial',
        model: UsuarioRepository,
        populate: [{path:'rango', model: RangoRepository}]
    }).find(filter)
    .populate({
        path:'encargado',
        model: UsuarioRepository,
        populate: [{path:'rango', model: RangoRepository}]
    });
    /*.populate('dieta')
    .populate('rutina');*/
}

exports.newValoracionOficial = async(data)=>
{
    const ret = new ValoracionOficialRepository(
        {
            ...data
        }
    )
    return await ret.save();
}

exports.deleteValoracionOficial = async(id)=>
{
    const ret = await ValoracionOficialRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    const ret = await ValoracionOficialRepository.findByIdAndUpdate(id, {...data});
    return ret;
}
