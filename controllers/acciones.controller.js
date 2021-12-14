const AccionesDataWorker = require("../dataworkers/acciones.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");

exports.getAll = async(req, res)=>{
    res.send({response: await AccionesDataWorker.getAll()});
}

exports.getByIDParam = async(req, res)=>
{
    res.send({response: await AccionesDataWorker.getByID(req.params.id)});
}

exports.getByFilter = async(req, res)=>
{
    res.send({response: await AccionesDataWorker.getByFilter(req.body)});
}

exports.post = async(req, res)=>
{
    let x= await AccionesDataWorker.newAccion(req.body);
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    let x = await AccionesDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await AccionesDataWorker.deleteAccion(id);
    res.send({response: x});
}