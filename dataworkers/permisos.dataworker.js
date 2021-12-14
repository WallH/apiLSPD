
const db = require("../models");
const PermisosRepository = db.permisos;
const PermisosEndpointRepository = db.permisosendpoint;
const RangoRepository = db.rango;
const AccionesRepository = db.accion;



exports.getByID = async(id)=>
{
    return await PermisosRepository.findById(id);
/*    .populate('dieta')
    .populate({
        path: 'rutina',
        model: RutinaRepository,
        populate: [{path:'ejercicio', model: EjercicioRepository}]
    });*/
}

exports.getAll = async()=>
{
    return await PermisosRepository.find();
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
    return (await PermisosRepository.findOne(filter)
    .populate({ path:'acciones', model:AccionesRepository }));
    /*.populate('dieta')
    .populate('rutina');*/
}

exports.getByRank = async(rank)=>
{
    return (await PermisosRepository.findOne(rank)
    .populate({ path:'acciones', model:AccionesRepository }));
}

exports.newPermisos = async(data)=>
{
    const ret = new PermisosRepository(
        {
            ...data
        }
    )
    console.log(ret);
    return await ret.save();
}

exports.deletePermisos = async(id)=>
{
    const ret = await PermisosRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    const ret = await PermisosRepository.findByIdAndUpdate(id, {...data});
    return ret;
}