const { Trips } = require("../../../models");

module.exports.getTripById = async (req, res) => {
  const { _id } = req.params;
  const paramsDb = {};
  if (_id) {
    paramsDb["_id"] = _id;
  }

  const trip = await Trips.findOne({ paramsDb });
  if (trip) {
    return res.status(200).send(trip);
  } else if (!trip) {
    return res.status(400).send({ message: "Trip with such id was not found" });
  }
};
