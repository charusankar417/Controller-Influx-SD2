const mongoose = require("mongoose");

const AdminScema = new mongoose.Schema({
  email: {type: String, unique: true },
  username: { type: String, required: true},
  password: { type: String, required: true },
});

const AdminModel = mongoose.model("admins", AdminScema);


module.exports = AdminModel;
