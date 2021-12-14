
const db = require("../models");
const AccionesRepository = db.accion;
const PermisosEndpointRepository = db.permisosendpoint;
const RangoRepository = db.rango;



exports.getByID = async(id)=>
{
    return await AccionesRepository.findById(id);
/*    .populate('dieta')
    .populate({
        path: 'rutina',
        model: RutinaRepository,
        populate: [{path:'ejercicio', model: EjercicioRepository}]
    });*/
}

exports.getAll = async()=>
{
    return await AccionesRepository.find();
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
    return (await AccionesRepository.find(filter));
    /*.populate('dieta')
    .populate('rutina');*/
}

exports.newAccion = async(data)=>
{
    const ret = new RangoRepository(
        {
            ...data
        }
    )
    console.log(ret);
    return await ret.save();
}

exports.deleteAccion = async(id)=>
{
    const ret = await AccionesRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    const ret = await AccionesRepository.findByIdAndUpdate(id, {...data});
    return ret;
}