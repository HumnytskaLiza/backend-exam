const { Trips } = require("../../../models");

module.exports.getTrips = async (req, res) => {
  let {} = req.query;

  const query = {};

  const docs = await Trips.find(query);

  return res.status(200).send(docs);
};
