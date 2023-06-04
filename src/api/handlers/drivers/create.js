const { Drivers } = require("../../../models");

module.exports.createDriver = async (req, res) => {
  const {} = req.body;

  const driver = new Drivers({});
  const doc = await driver.save();

  return res.status(200).send(doc);
};
