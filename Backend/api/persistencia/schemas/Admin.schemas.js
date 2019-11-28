const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema ({
  user: {type: String, required: true, maxlength: 35 },
  password: {type: String, required: true, maxlength: 35 },
});

module.exports = mongoose.model("Admin", adminSchema);