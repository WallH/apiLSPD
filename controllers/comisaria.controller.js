const ComisariaDataWorker = require("../dataworkers/comisaria.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");

exports.getAll = async(req, res)=>{
    res.send({response: await ComisariaDataWorker.getAll()});
}

exports.getByIDParam = async(req, res)=>
{
    res.send({response: await ComisariaDataWorker.getByID(req.params.id)});
}

exports.getByFilter = async(req, res)=>
{
    res.send({response: await ComisariaDataWorker.getByFilter(req.body)});
}

exports.post = async(req, res)=>
{
    let x= await ComisariaDataWorker.new(req.body);
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    let x = await ComisariaDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await ComisariaDataWorker.delete(id);
    res.send({response: x});
}