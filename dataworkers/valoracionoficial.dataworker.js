const db = require("../models");
const ValoracionOficialRepository = db.valoracionoficial;
const UsuarioRepository = db.usuario;

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
    return await ValoracionOficialRepository.find().populate('plan')
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
    return await ValoracionOficialRepository.find(filter).populate('plan')
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
    console.log(ret);
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
