//const TokenDataWorker = require("../dataworkers/token.dataworker");
const JWTDataWorker = require("../dataworkers/jwt.dataworker");
const TokenDataWorker = require("../dataworkers/tokenlogin.dataworker")

exports.userIsNotLoggedIn = async(req, res, next) =>
{
    if(!req.cookies.token || JWTDataWorker.IsValidToken(req.cookies.token) == false)
    {
        next();
        return ;
    }
    res.status(401).send({error: "Usuario ya logueado."});
}

exports.userIsLoggedIn = async(req, res, next) =>
{
    if(req.cookies.token && JWTDataWorker.IsValidToken(req.cookies.token) && await TokenDataWorker.isLegitToken(req.cookies.token))  
    {
        next();
        return ;    
    }
    res.status(401).send({error: "No autenticado."});
}

exports.userIsWall = async(req,res, next)=>
{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    if(userLoggedIn.nombre_usuario == "Wall") 
    {
        next();
        return;
    }
    res.status(401).send({error: "Sin permisos"});
}


exports.userIsPTB = async(req, res, next)=>
{
    const userLoggedIn = await TokenDataWorker.getUserByToken(req.cookies.token);
    if(userLoggedIn?.ptb == false) 
    {
        next();
        return;
    }
    res.status(401).send({error: "Sin permisos"});
}
