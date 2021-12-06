const ValoracionOficialDataWorker = require("../dataworkers/valoracionoficial.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");

exports.getMy = async(req, res)=>{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    const filter = 
    {
        alumno: userLoggedIn.alumno
    };
    res.send({response: await ValoracionOficialDataWorker.getByFilter(filter)});
}

exports.getAll = async(req, res)=>{
    res.send({response: await ValoracionOficialDataWorker.getAll()});
}

exports.getAllPublicos = async(req, res)=>
{
    res.send({response: await ValoracionOficialDataWorker.getAllPublico()});
}

exports.getByIDParam = async(req, res)=>
{
    res.send({response: await ValoracionOficialDataWorker.getByID(req.params.id)});
}

exports.getByFilter = async(req, res)=>
{
    res.send({response: await ValoracionOficialDataWorker.getByFilter(req.body)});
}

exports.post = async(req, res)=>
{
    let x= await ValoracionOficialDataWorker.newValoracionOficial(req.body);
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    let x = await ValoracionOficialDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await ValoracionOficialDataWorker.deleteValoracionOficial(id);
    res.send({response: x});
}