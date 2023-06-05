const { Users } = require("../../../models");

module.exports.postUsers = async (req, res) => {
  const {} = req.body;

  const user = new Users({});
  const doc = await user.save();

  return res.status(200).send(doc);
};
