const db = require("../../models");
const GradoSancionRepository = db.gradosancion;


exports.getByID = async(id)=>
{
    return await GradoSancionRepository.findById(id)
    .populate({path:'acumulacion', model: GradoSancionRepository});
}

exports.getAll = async()=>
{
    return await GradoSancionRepository.find()
    .populate({path:'acumulacion', model: GradoSancionRepository});
}

exports.getByFilter = async(filter)=>
{
    return await GradoSancionRepository.find(filter)
    .populate({path:'acumulacion', model: GradoSancionRepository});
}

exports.getByFilterWithoutSupervisor = async(filter) =>
{
    return await GradoSancionRepository.find(filter);
}

exports.new = async(data)=>
{
    const ret = new GradoSancionRepository(
        {
            ...data
        }
    )
    return await ret.save();
}

exports.delete = async(id)=>
{
    const ret = await GradoSancionRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    const ret = await GradoSancionRepository.findByIdAndUpdate(id, {...data});
    return ret;
}



