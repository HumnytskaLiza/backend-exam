const { Trips } = require("../../../models");
const { Drivers } = require("../../../models");
const { Types } = require("mongoose");

module.exports.postTrips = async (req, res) => {
  const { driverId, pointA, pointB, price, date, userIds } = req.body;

  if (!driverId) {
    return res.status(400).send({ message: "Only a driver can create a trip" });
  }
  const driver = await Drivers.findOne({ _id: driverId });
  if (driver) {
    if (price <= 0) {
      return res
        .status(400)
        .send({ message: "Price must be greater than zero" });
    }
    const trip = new Trips({ pointA, pointB, price, date, userIds });
    driver.tripIds.push(trip._id);
    const doc = await trip.save();
    await driver.save();
    return res.status(200).send(doc);
  }
  if (!driver) {
    return res.status(400).send({ message: "Such driver was not found" });
  }
};
