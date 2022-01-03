const GradoSancionDataWorker = require("../dataworkers/sanciones/gradosancion.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");

exports.getAll = async(req, res)=>{
    res.send({response: await GradoSancionDataWorker.getAll()});
}

exports.getByIDParam = async(req, res)=>
{
    res.send({response: await GradoSancionDataWorker.getByID(req.params.id)});
}

exports.getByFilter = async(req, res)=>
{
    res.send({response: await GradoSancionDataWorker.getByFilter(req.body)});
}

exports.post = async(req, res)=>
{
    let x= await GradoSancionDataWorker.new(req.body);
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    let x = await GradoSancionDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await GradoSancionDataWorker.delete(id);
    res.send({response: x});
}