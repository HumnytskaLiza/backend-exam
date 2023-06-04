const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  login: { type: String },
  password: { type: String },
  car: {
    seatsAvailable: { type: Number },
    carId: { type: String },
    model: { type: String },
    color: { type: String },
  },
  phoneNumber: { type: String },
  tripIds: [
    {
      _id: { type: Types.ObjectId },
    },
  ],
});

const Drivers = new model("drivers", schema, "drivers");

module.exports = { Drivers };
