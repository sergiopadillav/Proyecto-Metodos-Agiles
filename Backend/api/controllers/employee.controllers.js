const Employee = require("../persistencia/repositories/employee.repositories");

module.exports.save = async(request, response) => {
  /*   const employee = request.body; */
        const employee = {
        first_name: request.body.first_name,
        second_name: request.body.second_name,
        gender: request.body.gender,
        dateJob: request.body.dateJob,
        email: request.body.email,
        phone: request.body.phone,
        rfc: request.body.rfc
    };
    try{
        const result = await Employee.save(employee);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error! empleado no creado");
    }
}

module.exports.put = async(request, response) => {
    const id = request.params.id;
   /* const employee = request.body; */
         const employee = {
        first_name: request.body.first_name,
        second_name: request.body.second_name,
        gender: request.body.gender,
        dateJob: request.body.dateJob,
        email: request.body.email,
        phone: request.body.phone,
        rfc: request.body.rfc
    };
    
    try{
        const result = await Employee.put(id,employee);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error! No se pudo actualizar el empleado");
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