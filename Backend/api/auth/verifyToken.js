const jwt = require("jsonwebtoken");
const secret = require("../../config/config");

module.exports.verificarToken = async(req, res, next) => {
    if(!req.headers.autorization){
        return res.status(401).send("no estas autorizado joto pendejo")
    }

    const token =  req.headers.autorization;

    if(token === "null"){
        return res.status(401).send("no estas autorizado joto pendejo")
    }

    const payload = jwt.verify(token, secret.secret)
  //  req.userId = payload._id
    next()
}