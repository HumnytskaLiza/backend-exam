const { Trips, Users, Drivers } = require("../../../models");
const { Types } = require("mongoose");

module.exports.updateTrip = async (req, res) => {
  // const { _id } = req.params;
  // const { userId, count } = req.body;
  // const trip = await Trips.findOne({ _id: Types.ObjectId(_id) });
  // if (!trip) {
  //   return res.status(400).send({ message: "Trip was not found" });
  // }
  // const driver = await Drivers.findOne({ tripIds: { $in: [_id] } });
  // if (!driver) {
  //   return res.status(400).send({ message: "Driver was not found" });
  // }
  // if (count > driver.car.seatsAvailable) {
  //   return res.status(400).send({ message: "Too much passengers for a car" });
  // }
  // const ind = trip.userIds.findIndex((user) => user._id.toString() === userId);
  // if (ind == -1) {
  //   trip.userIds.push({ _id: userId, count: count });
  // } else if (ind != -1) {
  //   trip.userIds[ind].count = count;
  // }
  // return res.status(200).send(trip);
};
