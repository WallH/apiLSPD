const ValoracionOficialDataWorker = require("../dataworkers/valoracionoficial.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");
const UsuarioDataWorker = require("../dataworkers/usuario.dataworker");
exports.getMy = async(req, res)=>{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    const filter = 
    {
        encargado: userLoggedIn
    };
    res.send({response: await ValoracionOficialDataWorker.getByFilter(filter)});
}

exports.getMyPoints = async(req, res) =>{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    const filter = 
    {
        oficial: userLoggedIn
    };
    res.send({response: await ValoracionOficialDataWorker.getByFilterWithoutSupervisor(filter)});
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
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    req.body.encargado = userLoggedIn;
    let officerEvaluated = (await UsuarioDataWorker.getByID(req.body.oficial?._id));
    if(officerEvaluated == null) 
    {
        res.status(400).send({error: "Oficial no existente"});
        return ;
    }
    if(officerEvaluated.rango.poder > userLoggedIn.rango.poder)
    {
        res.status(401).send({error: "No tienes permisos suficientes."})
        return ;
    }
    let x = await ValoracionOficialDataWorker.newValoracionOficial(req.body);
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    req.body.encargado = userLoggedIn;
    let x = await ValoracionOficialDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await ValoracionOficialDataWorker.deleteValoracionOficial(id);
    res.send({response: x});
}