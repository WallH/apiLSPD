const db = require("../../models");
const FichaPTBRepository = db.fichaptb;
const UsuarioRepository = db.usuario;
const RangoRepository = db.rango;
const ComisariaRepository = db.comisaria;

exports.getByID = async(id)=>
{
    return await FichaPTBRepository.findById(id).populate('oficial');
}

exports.getAll = async()=>
{
    return await FichaPTBRepository.find()
    .populate({
        path:'oficial',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository},{path:'comisaria', model:ComisariaRepository}]
    })
    .populate({
        path:'encargado',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository}, {path:'comisaria', model:ComisariaRepository}]
    });
}

exports.getByFilter = async(filter)=>
{
    return await FichaPTBRepository.find(filter).populate({
        path:'oficial',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository}]
    }).find(filter)
    .populate({
        path:'encargado',
        model: UsuarioRepository,
        select: "-clave",
        populate: [{path:'rango', model: RangoRepository}]
    });
}

exports.new = async(data)=>
{
    const ret = new FichaPTBRepository(
        {
            ...data
        }
    )
    return await ret.save();
}

exports.delete = async(id)=>
{
    const ret = await FichaPTBRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    const ret = await FichaPTBRepository.findByIdAndUpdate(id, {...data}).select('-clave');
    return ret;
}
