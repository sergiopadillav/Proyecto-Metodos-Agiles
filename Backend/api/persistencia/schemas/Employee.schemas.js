const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema ({
  date: {type: Date, default: Date.now},
  first_name: {type: String, required: true, maxlength: 35 },
  second_name: {type: String, required: true, maxlength: 35 },
  gender: {type: String, required: true,maxlength: 3 },
  dateJob: {type: Date, required:true},
  email: {type: String, required: true, maxlength: 50},
  phone: {type: String, required: true, maxlength: 11},
  rfc: {type: String, required: true, maxlength: 35}
});

module.exports = mongoose.model("Employee", employeeSchema);
