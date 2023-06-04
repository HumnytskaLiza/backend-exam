const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  car: {
    seatsAvailable: { type: Number, required: true },
    carId: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
  },
  phoneNumber: { type: String, required: true },
  tripIds: [
    {
      _id: { type: Types.ObjectId },
    },
  ],
});

const Drivers = new model("drivers", schema, "drivers");

module.exports = { Drivers };
