const admin = require("../persistencia/repositories/admin.repositories");

module.exports.signin = async(request, response) => {
    
    const user = request.body.user;
    const password = request.body.password;

    try{
        const result = await admin.signin(user, password);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("uyyy algo te salio mal :C");
    }
}

module.exports.save = async(request, response) => {

        const newAdmin = {
        user: request.body.user,
        password: request.body.password,
        };

    try{
        const result = await admin.save(newAdmin);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error! admin no creado");
    }
  }