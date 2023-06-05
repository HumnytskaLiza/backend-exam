const { Drivers } = require("../../../models");

module.exports.getDrivers = async (req, res) => {
  let {} = req.query;

  const query = {};

  const docs = await Drivers.find(query);

  return res.status(200).send(docs);
};
