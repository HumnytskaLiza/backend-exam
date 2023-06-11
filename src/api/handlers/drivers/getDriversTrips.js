const { Drivers, Trips, Users } = require("../../../models");

module.exports.getDriversTrips = async (req, res) => {
  const { _id } = req.params;
  const { isActive } = req.query;

  const driver = await Drivers.findOne({ _id: _id });
  if (!driver) {
    return res.status(400).send({ message: "Driver was not found" });
  }
  let trips = [];
  if (isActive == "true") {
    trips = await Trips.find({
      _id: { $in: driver.tripIds },
      $or: [
        {
          "date.end": { $gt: new Date() },
          "date.start": { $lt: new Date() },
        },
        {
          "date.start": { $gt: new Date() },
        },
      ],
    });
  } else if (isActive == "false") {
    trips = await Trips.find({
      _id: { $in: driver.tripIds },
      "date.end": { $lt: new Date() },
    });
  } else if (!isActive) {
    trips = await Trips.find({
      _id: { $in: driver.tripIds },
    });
  } else {
    return res
      .status(400)
      .send({ message: "Wrong value of isActive. Enter true or false" });
  }

  const userIds = trips.flatMap((trip) => trip.userIds.map((elem) => elem._id));
  const users = await Users.find({ _id: { $in: userIds } });

  const newTrips = trips.map((trip) => {
    const tripUsers = trip.userIds.map((u) => {
      const user = users.find(
        (user) => user._id.toString() === u._id.toString()
      );
      return {
        firstName: user.firstName,
        lastName: user.lastName,
      };
    });

    return {
      _id: trip._id,
      date: trip.date,
      pointA: trip.pointA,
      pointB: trip.pointB,
      price: trip.price,
      users: tripUsers,
    };
  });
  return res.status(200).send(newTrips);
};
