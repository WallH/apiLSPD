const UsuarioDataWorker = require("../dataworkers/usuario.dataworker");

const PermissionMiddleware = require("../middlewares/permisos.middleware");
exports.getAll = async(req, res)=>{
    //PermissionMiddleware.comprobarPermisosNecesarios(req.cookies.token, "usuario");
    res.send({response: await UsuarioDataWorker.getAll()});
}

exports.getByIDParam = async(req, res)=>
{
    res.send({response: await UsuarioDataWorker.getByID(req.params.id)});
}

exports.getByFilter = async(req, res)=>
{
    res.send({response: await UsuarioDataWorker.getByFilter(req.body)});
}

exports.post = async(req, res)=>
{
    if(UsuarioDataWorker.existsNombreUsuario(req.body.nombre_usuario))
    {
        res.status(401).send({error: "Nombre de usuario ya existe."});
    }
    req.body.activo = true;
    let x= await UsuarioDataWorker.newUsuario(req.body);
    res.send({response: x});
}

exports.put = async(req, res)=>
{
    let x = await UsuarioDataWorker.update(req.params.id, req.body);
    res.send({response: x});
}

exports.delete = async(req, res)=>
{
    const id = req.params.id;
    let x = await UsuarioDataWorker.deleteUsuario(id);
    res.send({response: x});
}