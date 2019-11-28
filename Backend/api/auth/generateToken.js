const jwt = require("jsonwebtoken");
const secret = require("../../config/config");

module.exports.generarToken = async (user) => {
    const token = await jwt.sign(user, secret.secret);
    return token;
}