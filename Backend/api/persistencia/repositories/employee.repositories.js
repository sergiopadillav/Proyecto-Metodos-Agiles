const Employee = require("../schemas/Employee.schemas");

module.exports.get = async () => {
    const result = await Employee.find();
    return result;
}

module.exports.save = async (employee) => { 
    const newEmployee = new Employee(employee);
    const result = await newEmployee.save();
    return result;
}

module.exports.put = async (id, employee) => {
    const result = await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    return result;
}
