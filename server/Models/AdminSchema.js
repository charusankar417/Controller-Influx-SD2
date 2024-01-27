const mongoose = require("mongoose");

const AdminScema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AdminModel = mongoose.model("admins", AdminScema);
module.exports = AdminModel;
