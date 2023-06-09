const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  pointA: { type: String, required: true },
  pointB: { type: String, required: true },
  price: { type: Number, required: true },
  date: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },

  userIds: [
    {
      _id: { type: Types.ObjectId, required: true },
      count: { type: Number, required: true },
    },
  ],
});

const Trips = new model("trips", schema, "trips");

module.exports = { Trips };
