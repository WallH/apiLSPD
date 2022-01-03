const db = require("../../models");
const SancionRepository = db.sancion;
const GradoSancionRepository = db.gradosancion;
const UsuarioRepository = db.usuario;

exports.getByID = async(id)=>
{
    return await SancionRepository.findById(id)
    .populate({
        path:'grado',
        model: GradoSancionRepository
    })
    .populate({
        path:'oficial',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository},{path:'comisaria', model:ComisariaRepository}]
    })
    .populate({
        path:'supervisor',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository},{path:'comisaria', model:ComisariaRepository}]
    });

}

exports.getAll = async()=>
{
    return await SancionRepository.find()
    .populate({
        path:'grado',
        model: GradoSancionRepository
    })
    .populate({
        path:'oficial',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository},{path:'comisaria', model:ComisariaRepository}]
    })
    .populate({
        path:'supervisor',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository},{path:'comisaria', model:ComisariaRepository}]
    });
}

exports.getByFilter = async(filter)=>
{
    return await SancionRepository.find(filter)
    .populate({
        path:'grado',
        model: GradoSancionRepository
    })
    .populate({
        path:'oficial',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository},{path:'comisaria', model:ComisariaRepository}]
    })
    .populate({
        path:'supervisor',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository},{path:'comisaria', model:ComisariaRepository}]
    });
}

exports.getByFilterWithoutSupervisor = async(filter) =>
{
    return await SancionRepository.find(filter);
}

exports.new = async(data)=>
{
    const ret = new SancionRepository(
        {
            ...data
        }
    )
    return await ret.save();
}

exports.delete = async(id)=>
{
    const ret = await SancionRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    const ret = await SancionRepository.findByIdAndUpdate(id, {...data})
    .populate({
        path:'grado',
        model: GradoSancionRepository
    })
    .populate({
        path:'oficial',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository},{path:'comisaria', model:ComisariaRepository}]
    })
    .populate({
        path:'supervisor',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository},{path:'comisaria', model:ComisariaRepository}]
    });
    return ret;
}



