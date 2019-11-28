const Admin = require("../schemas/Admin.schemas");
const generateToken = require("../../auth/generateToken");

module.exports.save = async (employee) => { 
    const newAdmin = new Admin(employee);
    const result = await newAdmin.save();
    return result;
}

module.exports.signin = async (user, password) => {
    
    const newAdmin = await Admin.findOne({user});
    if (!newAdmin) return res.status(401).send('The email doen\' exists');
    if (newAdmin.password !== password) return res.status(401).send('Wrong Password');
    const newAdminAregresar = await Admin.findOne({user},{password: 0});
    const token = await generateToken.generarToken(user);

    return {newAdminAregresar,token};
}
