const SancionDataWorker = require("../dataworkers/sanciones/sancion.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");
const UsuarioDataWorker = require("../dataworkers/usuario.dataworker");


exports.getMy = async(req, res)=>{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    const filter = 
    {
        oficial: userLoggedIn
    };
    res.send({response: await SancionDataWorker.getByFilter(filter)});
}

exports.getMyCreated = async(req, res) =>{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    const filter = 
    {
        supervisor: userLoggedIn
    };
    res.send({response: await SancionDataWorker.getByFilterWithoutSupervisor(filter)});
}

exports.getAll = async(req, res)=>{
    res.send({response: await SancionDataWorker.getAll()});
}

exports.getAllPublicos = async(req, res)=>
{
    res.send({response: await SancionDataWorker.getAllPublico()});
}

exports.getByIDParam = async(req, res)=>
{
    res.send({response: await SancionDataWorker.getByID(req.params.id)});
}

exports.getByFilter = async(req, res)=>
{
    res.send({response: await SancionDataWorker.getByFilter(req.body)});
}

exports.post = async(req, res)=>
{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    req.body.supervisor = userLoggedIn;
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
    if(officerEvaluated._id == userLoggedIn._id) 
    {
        res.status(400).send({error: "No puedes autoevaluarte."});
        return ;
    }
    let x = await SancionDataWorker.new(req.body);
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    req.body.supervisor = userLoggedIn;
    let x = await SancionDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await SancionDataWorker.delete(id);
    res.send({response: x});
}