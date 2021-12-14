const PermisosDataWorker = require("../dataworkers/permisos.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");

exports.getAll = async(req, res)=>{
    res.send({response: await PermisosDataWorker.getAll()});
}

exports.getByIDParam = async(req, res)=>
{
    res.send({response: await PermisosDataWorker.getByID(req.params.id)});
}

exports.getByFilter = async(req, res)=>
{
    res.send({response: await PermisosDataWorker.getByFilter(req.body)});
}
/*
exports.getByRank = async(req, res) =>
{
    res.send()
}*/

exports.post = async(req, res)=>
{
    let x= await PermisosDataWorker.newPermisos(req.body);
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    let x = await PermisosDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await PermisosDataWorker.deletePermisos(id);
    res.send({response: x});
}