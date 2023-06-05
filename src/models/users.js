const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});

const Users = new model("users", schema, "users");

module.exports = { Users };
