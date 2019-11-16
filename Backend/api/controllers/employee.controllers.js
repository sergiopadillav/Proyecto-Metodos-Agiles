const Employee = require("../persistencia/repositories/employee.repositories");
const employeeModel = require("../persistencia/schemas/Employee.schemas")

module.exports.save = async(request, response) => {
    const employee = request.body;
    /*     const employee = new employeeModel({
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        rfc: req.body.rfc
    });*/
    try{
        const result = await Employee.save(employee);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error! empleado no creado");
    }
}


module.exports.get = async(request, response) => {
    try{
        const result = await Employee.get();
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error! No se obtuvieron los empleados");
    }
}

module.exports.put = async(request, response) => {
    const id = request.params.id;
    const employee = request.body;
    /*     const employee = new employeeModel({
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        rfc: req.body.rfc
    });*/
    
    try{
        const result = await Employee.put(id,employee);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error! No se pudo actualizar el empleado");
    }
}