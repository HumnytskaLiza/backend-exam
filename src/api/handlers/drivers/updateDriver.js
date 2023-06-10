const { Types } = require("mongoose");
const { Drivers } = require("../../../models");

module.exports.updateTrip = async (req, res) => {
  const { driverId } = req.params;
  const { seats, carId, model, color } = req.body;
  if (driverId) {
    const driver = await Drivers.findOne({ _id: driverId });
    if (driver) {
      if (seats <= 0) {
        return res
          .status(400)
          .send({ message: "Number of seats must be greater than zero" });
      }
      driver.car.seatsAvailable = seatsAvailable;
      driver.car.carId = carId;
      driver.car.model = model;
      driver.car.color = color;
      await driver.save();
    }
    if (!driver) {
      return res.status(400).send({ message: "Driver was not found" });
    }
    return res.status(200).send(driver);
  }
};

/*
module.exports.updateDish = async (req, res) => {
 const { price, isAvailable } = req.body;
 const { _id } = req.params;
 const update = {};
 if (price) {
  update.price = price;
 }

 if (isAvailable !== undefined) {
  update.isAvailable = isAvailable;
 }

 const doc = await Dishes.findOneAndUpdate(
  { _id: Types.ObjectId(_id) },
  { $set: update },
  { isNew: true }
 );

 return res.status(200).send(doc);
};
*/
