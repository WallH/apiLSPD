const SancionDataWorker = require("../dataworkers/sanciones/sancion.dataworker");
const GradoSancionDataWorker = require("../dataworkers/sanciones/gradosancion.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");
const UsuarioDataWorker = require("../dataworkers/usuario.dataworker");
const db = require("../models");
const GradoSancionRepository = db.gradosancion;
const SancionRepository = db.sancion;
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

    let gradoSancion = await GradoSancionDataWorker.getByID(req.body.grado._id);
    let fechaPiv = new Date(req.body.fecha);
    //console.log(fechaPiv);
    fechaPiv.setDate(fechaPiv.getDate() + gradoSancion.dias);
    req.body.fechaFin = fechaPiv;
    req.body.anuladaporacumulacion = null;
    if(gradoSancion.acumulacion == null || gradoSancion.acumulacion == undefined)
    {
        let x = await SancionDataWorker.new(req.body);
        res.send({response: x});
        return; 
    }
    let tipoSancAvailable;
    let data = req.body;
    let x = await SancionDataWorker.new(data);
    while((tipoSancAvailable = await SancionDataWorker.getByFilter({oficial:officerEvaluated, grado:gradoSancion._id, anuladaporacumulacion: null, fechaFin: {"$gt": req.body.fecha}})).length == gradoSancion.acumulacionCantidad)
    {
        let pivFecha = new Date(req.body.fecha);
        console.log(gradoSancion.acumulacion.dias);
        pivFecha.setDate(pivFecha.getDate() + gradoSancion.acumulacion.dias);
        data = 
        {
            oficial:officerEvaluated,
            supervisor: userLoggedIn,
            grado: gradoSancion.acumulacion,
            observacion: `Acumulación de ${gradoSancion.acumulacionCantidad} sanciones de tipo ${gradoSancion.nombre}`,
            fecha: req.body.fecha,
            anuladaporacumulacion: null,
            acumuladas: tipoSancAvailable,
            fechaFin: pivFecha
        }
        let sancionAdd = await SancionDataWorker.new(data);

        await SancionRepository.updateMany({oficial:officerEvaluated, grado:gradoSancion._id, anuladaporacumulacion: null, fechaFin: {"$gt": req.body.fecha}}, {anuladaporacumulacion: sancionAdd});
        gradoSancion = await GradoSancionDataWorker.getByID(gradoSancion.acumulacion._id);
    }
    console.log(tipoSancAvailable);
    res.send({response: "OK"});

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