const EncryptDataWorker = require("../dataworkers/encrypt.dataworker");
const UsuarioDataWorker = require("../dataworkers/usuario.dataworker");
const JWTDataWorker = require("../dataworkers/jwt.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker");
exports.loginAccount = async(req, res)=>
{
    var cuentaLogin = (await UsuarioDataWorker.getByNombreUsuario(req.body.usuario))[0] ?? null;
    if(cuentaLogin == null) 
    {
        res.status(404).send({reason: "Cuenta inexistente."});
        return;
    }
    if(!cuentaLogin.activo)
    {
        res.status(404).send({reason: "Cuenta inhabilitada."});
        return;
    }
    if(await EncryptDataWorker.verifyPassword(req.body.clave, cuentaLogin.clave)) 
    {
        var token = JWTDataWorker.BuildToken(cuentaLogin);
        //await TokenDataWorker.addTokenLogin(cuentaLogin.CuentaID, token);
        const resultToken = await TokenDataWorker.newToken(
            {
                token: token,
                fecha: new Date(),
                ip: req.ip,
                usuario:cuentaLogin,
                activo: true
            }
        );
        res.cookie('token', token, {httpOnly: true});
        res.send({
            usuario: cuentaLogin.nombre_usuario,
            expiration: Math.floor(Date.now()/1000)+3600,
            token: token,
            //rol: cuentaLogin.rol,
            nombre: cuentaLogin.nombre,
            apellido: cuentaLogin.apellido,
            rango: cuentaLogin.rango
            
        }
        );
        return;
    }
    res.status(400).send({reason: "Credenciales incorrectas"});
}

exports.logoutAccount= async(req, res) =>
{
    res.cookie('token', {expires:Date.now()});
    res.send({status:true});
}