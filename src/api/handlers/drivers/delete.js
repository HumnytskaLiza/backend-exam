const { Types } = require("mongoose");
const { Drivers } = require("../../../models");

module.exports.deleteDriver = async (req, res) => {
  const { _id } = req.params;

  await Drivers.deleteOne({ _id: Types.ObjectId(_id) });

  return res.status(200).send();
};
