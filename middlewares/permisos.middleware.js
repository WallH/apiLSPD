const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");
const PermisosEndpointDataWorker = require("../dataworkers/permisosendpoint.dataworker");
const db = require("../models");
const PermisosRepository = db.permisos;
const PermisosEndpointRepository = db.permisosendpoint;



exports.userCan = (endpoint) =>
{
    return async(req, res, next)=>
    {
        if(await PermisosEndpointDataWorker.comprobarPermisosNecesarios(req.cookies.token, endpoint))
        {
            next();
            return ;
        }
        res.status(401).send({error: "Usuario sin permisos."});
    }
}
