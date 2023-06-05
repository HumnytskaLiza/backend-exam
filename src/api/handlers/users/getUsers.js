const { Users } = require("../../../models");

module.exports.getUsers = async (req, res) => {
  let {} = req.query;

  const query = {};

  const docs = await Users.find(query);

  return res.status(200).send(docs);
};
