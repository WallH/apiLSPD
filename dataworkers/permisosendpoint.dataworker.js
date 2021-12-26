const TokenDataWorker = require("./tokenlogin.dataworker");

const db = require("../models");
const PermisosRepository = db.permisos;
const PermisosEndpointRepository = db.permisosendpoint;
exports.comprobarPermisosNecesarios = async(token, endpoint)=>
{   
    const userLoggedIn = await TokenDataWorker.getUserByToken(token);
    const needed = await PermisosEndpointRepository.findOne({
        endpoint: endpoint
    });
    let checkerActions = needed?.acciones ?? [];
    //console.log(checkerActions);
    if(needed == null || checkerActions.length == 0) return true;
    const havePermission = await PermisosRepository.findOne(
    {
        "rango": userLoggedIn.rango._id,
        "acciones": {
            $all: needed?.acciones
        }
    });
    //console.log(havePermission);
    //console.log(havePermission);
    return havePermission != null;
}

exports.getByID = async(id)=>
{
    return await PermisosEndpointRepository.findById(id);
}

exports.getAll = async()=>
{
    return await PermisosEndpointRepository.find()
    .populate({path: "acciones"});
}

exports.getByFilter = async(filter)=>
{
    return (await PermisosEndpointRepository.find(filter));
}

exports.newPermisoEndpoint = async(data)=>
{
    const ret = new PermisosEndpointRepository(
        {
            ...data
        }
    )
    return await ret.save();
}

exports.deletePermisoEndpoint = async(id)=>
{
    const ret = await PermisosEndpointRepository.deleteOne({_id: id});
    return ret;
}

exports.update = async(id, data)=>
{
    delete data["_id"];
    const ret = await PermisosEndpointRepository.findByIdAndUpdate(id, {...data});
    return ret;
}