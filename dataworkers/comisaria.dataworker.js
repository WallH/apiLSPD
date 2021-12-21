
const db = require("../models");
const ComisariaRepository = db.comisaria;



exports.getByID = async(id)=>
{
    return await ComisariaRepository.findById(id);
/*    .populate('dieta')
    .populate({
        path: 'rutina',
        model: RutinaRepository,
        populate: [{path:'ejercicio', model: EjercicioRepository}]
    });*/
}

exports.getAll = async()=>
{
    return await ComisariaRepository.find();
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
    return (await ComisariaRepository.find(filter));
    /*.populate('dieta')
    .populate('rutina');*/
}

exports.new = async(data)=>
{
    const ret = new ComisariaRepository(
        {
            ...data
        }
    )
    return await ret.save();
}

exports.delete = async(id)=>
{
    const ret = await ComisariaRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    const ret = await ComisariaRepository.findByIdAndUpdate(id, {...data});
    return ret;
}