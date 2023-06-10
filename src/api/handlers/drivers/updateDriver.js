const { Types } = require("mongoose");
const { Drivers } = require("../../../models");

module.exports.updateDriver = async (req, res) => {
  const { _id } = req.params;
  const { driverId, seats, carId, model, color } = req.body;

  const update = {};

  const driver = await Drivers.findOne({ _id: driverId });
  if (!driver) {
    return res.status(400).send({ message: "Such driver was not found" });
  }
  if (seats) {
    if (seats > 0) {
      update["car.seatsAvailable"] = seats;
    } else {
      return res
        .status(400)
        .send({ message: "The amount of seats must be greater than zero" });
    }
  }
  if (carId) {
    update["car.carId"] = carId;
  }
  if (model) {
    update["car.model"] = model;
  }
  if (color) {
    update["car.color"] = color;
  }

  const doc = await Drivers.findOneAndUpdate(
    { _id: Types.ObjectId(_id) },
    { $set: update },
    { isNew: true }
  );

  return res.status(200).send(doc);
};
