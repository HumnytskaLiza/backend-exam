const { Users } = require("../../../models");

module.exports.postUsers = async (req, res) => {
  const { firstName, lastName, login, password, phoneNumber } = req.body;

  let check = await Users.findOne({ login: login, login: login });
  if (check) {
    return res.status(400).send({ message: "This login is already in use" });
  }

  if (!firstName) {
    return res.status(400).send({ message: "You should add your firstName" });
  }

  if (!lastName) {
    return res.status(400).send({ message: "You should add your lastName" });
  }

  if (!phoneNumber) {
    return res.status(400).send({ message: "You should add your phoneNumber" });
  } else if (phoneNumber.length < 10) {
    return res.status(400).send({ message: "Your phoneNumber is too short" });
  } else if (phoneNumber.length > 10) {
    return res.status(400).send({ message: "Your phoneNumber is too long" });
  }

  const user = new Users({ firstName, lastName, login, password, phoneNumber });
  const doc = await user.save();

  return res.status(200).send(doc);
};
