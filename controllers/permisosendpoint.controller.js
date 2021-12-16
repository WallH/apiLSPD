const PermisosEndpointDataWorker = require("../dataworkers/permisosendpoint.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");

exports.getAll = async(req, res)=>{
    res.send({response: await PermisosEndpointDataWorker.getAll()});
}

exports.getByIDParam = async(req, res)=>
{
    res.send({response: await PermisosEndpointDataWorker.getByID(req.params.id)});
}

exports.getByFilter = async(req, res)=>
{
    res.send({response: await PermisosEndpointDataWorker.getByFilter(req.body)});
}

exports.post = async(req, res)=>
{
    let x= await PermisosEndpointDataWorker.newPermisoEndpoint(req.body);
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    let x = await PermisosEndpointDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await PermisosEndpointDataWorker.deletePermisoEndpoint(id);
    res.send({response: x});
}