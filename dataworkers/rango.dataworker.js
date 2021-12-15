const db = require("../models");
const RangoRepository = db.rango;

exports.getByID = async(id)=>
{
    return await RangoRepository.findById(id);
/*    .populate('dieta')
    .populate({
        path: 'rutina',
        model: RutinaRepository,
        populate: [{path:'ejercicio', model: EjercicioRepository}]
    });*/
}

exports.getAll = async()=>
{
    return await RangoRepository.find();
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
    return await RangoRepository.find(filter);
    /*.populate('dieta')
    .populate('rutina');*/
}

exports.newRango = async(data)=>
{
    const ret = new RangoRepository(
        {
            ...data
        }
    )
    return await ret.save();
}

exports.deleteRango = async(id)=>
{
    const ret = await RangoRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    const ret = await RangoRepository.findByIdAndUpdate(id, {...data});
    return ret;
}
