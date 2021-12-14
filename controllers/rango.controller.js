const RangoDataWorker = require("../dataworkers/rango.dataworker");
const PermisosDataWorker = require("../dataworkers/permisos.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");

exports.getMy = async(req, res)=>{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    const filter = 
    {
        alumno: userLoggedIn.alumno
    };
    res.send({response: await RangoDataWorker.getByFilter(filter)});
}

exports.getAll = async(req, res)=>{
    res.send({response: await RangoDataWorker.getAll()});
}

exports.getAllPublicos = async(req, res)=>
{
    res.send({response: await RangoDataWorker.getAllPublico()});
}

exports.getByIDParam = async(req, res)=>
{
    res.send({response: await RangoDataWorker.getByID(req.params.id)});
}

exports.getByFilter = async(req, res)=>
{
    res.send({response: await RangoDataWorker.getByFilter(req.body)});
}

exports.post = async(req, res)=>
{
    let x= await RangoDataWorker.newRango(req.body);
    let permiso = await PermisosDataWorker.newPermisos({ "rango": x, "acciones": []});
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    let x = await RangoDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await RangoDataWorker.deleteRango(id);
    res.send({response: x});
}