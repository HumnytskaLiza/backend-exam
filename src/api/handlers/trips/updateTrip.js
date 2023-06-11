const { Trips, Users, Drivers } = require("../../../models");
const { Types } = require("mongoose");

module.exports.updateTrip = async (req, res) => {
  const { _id } = req.params;
  const { userId, count } = req.body;

  const trip = await Trips.findOne({ _id: Types.ObjectId(_id) });
  if (!trip) {
    return res.status(200).send({ message: "Trip was not found" });
  }
  const driver = await Drivers.findOne({ tripIds: { $elemMatch: { _id } } });
  if (!driver) {
    return res.status(400).send({ message: "Driver was not found" });
  }
  const user = await Users.findOne({ _id: userId });
  if (!user) {
    return res.status(400).send({ message: "User was not found" });
  }
  if (count) {
    if (count > driver.car.seatsAvailable) {
      return res.status(400).send({ message: "Too much passengers for a car" });
    }
  }
  if (!count) {
    return res
      .status(400)
      .send({ message: "You should enter the amount of passengers" });
  }
  const ind = trip.userIds.findIndex((user) => user._id.toString() === userId);
  if (ind === -1) {
    trip.userIds.push({ _id: Types.ObjectId(userId), count: count });
  } else {
    trip.userIds[ind].count = count;
  }
  await trip.save();
  return res.status(200).send(trip);
};
