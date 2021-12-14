const { permisos } = require("../models");
const db = require("../models");
const TokenRepository = db.tokenlogin;
const UserRepository = db.usuario;
const RangoRepository = db.rango;
const PermisosRepository = db.permisos;
const AccionesRepository = db.accion;
exports.getUserByToken = async(token)=>
{
    const result = (await TokenRepository.find(
        {
            token: token
        }
    ).populate({
        path:'usuario',
        model: UserRepository,
        populate: [
            {
                path: 'rango',
                model: RangoRepository,
            }
        ]
    }))[0] ?? null;

    return result.usuario;
}

exports.newToken = async(data) =>
{
    const result = new TokenRepository(
        {
            ...data
        }
    );
    return await result.save();
}

exports.disableToken = async(token)=>
{
    const result = await TokenRepository.update({token:token}, {activo: false});
    return 1;
}

exports.isLegitToken = async(token) =>
{
    const result = (await TokenRepository.find(
        {
            token: token
        }
    ))[0] ?? null;
    return result != null && (result.activo && Date.now()-result.fecha.getTime() < (3600*1000)*3); 
}