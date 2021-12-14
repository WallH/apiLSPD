const TokenDataWorker = require("./tokenlogin.dataworker");

const db = require("../models");
const PermisosRepository = db.permisos;
const PermisosEndpointRepository = db.permisosendpoint;
exports.comprobarPermisosNecesarios = async(token, endpoint)=>
{   
    const userLoggedIn = await TokenDataWorker.getUserByToken(token);
    const needed = await PermisosEndpointRepository.findOne({
        endpoint: endpoint
    });
    const havePermission = await PermisosRepository.findOne(
    {
        "rango": userLoggedIn.rango._id,
        "acciones": {
            $all: needed?.acciones ?? []
        }
    });
    //console.log(havePermission);
    return havePermission != null;
}