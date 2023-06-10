const { Drivers, Trips, Users } = require("../../../models");

module.exports.getDriversTrips = async (req, res) => {
  const { _id } = req.params;
  const { isActive } = req.query;
  let trips;
  const driver = await Drivers.findOne({ _id: _id });
  if (!driver) {
    return res.status(400).send({ message: "Driver was not found" });
  }

  // const filter = {};
  // if (isActive === "active") {
  //   filter["date.start"] = { $lt: new Date() };
  //   filter["date.end"] = { $gt: new Date() };
  // } else if (isActive === "archived") {
  //   filter["date.end"] = { $lt: new Date() };
  // }
  trips = await Trips.find({ _id: { $in: driver.tripIds } });
  const userIds = trips.flatMap((trip) => trip.userIds.map((user) => user._id));
  const users = await Users.find({ _id: { $in: userIds } });
  //console.log(users);
  const formattedTrips = trips.map((trip) => ({
    date: {
      start: trip.date.start,
      end: trip.date.end,
    },
    pointA: trip.pointA,
    pointB: trip.pointB,
    price: trip.price,
    users: trip.userIds.map((user) => {
      return {
        firstName: user._id.firstName,
        lastName: user._id.lastName,
      };
    }),
  }));
  return res.status(200).send(formattedTrips);
};
