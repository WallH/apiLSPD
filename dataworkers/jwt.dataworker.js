var jwt = require('jsonwebtoken');
const SECRETKEY = "kde4114i201808errmenor3youl0v3dgoslfgigqpsoghlrsd59484621894dsa98f5aw";
exports.BuildToken = (cuenta)=>
{
    return jwt.sign({ 
        expires: Math.floor(Date.now()/1000)+3600,
        issuer: "lspdobservations.com",
        audience: "lspdobservations.com",
        username: cuenta.nombre_usuario
    }, SECRETKEY, {expiresIn: '6h'});
}

exports.IsValidToken = (token) =>
{
    try{
        jwt.verify(token, SECRETKEY);
        return true;
    } catch(err)
    {
        return false;
    }
}
