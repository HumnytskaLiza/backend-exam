const { Drivers } = require("../../../models");

module.exports.postDrivers = async (req, res) => {
  const { firstName, lastName, login, password, phoneNumber, car, tripIds } =
    req.body;

  let check = await Drivers.findOne({ login: login, password: password });
  if (check) {
    return res.status(400).send({ message: "This login is already in use" });
  }

  if (!phoneNumber) {
    return res.status(400).send({ message: "You should add your phoneNumber" });
  } else if (phoneNumber.length < 10) {
    return res.status(400).send({ message: "Your phoneNumber is too short" });
  } else if (phoneNumber.length > 10) {
    return res.status(400).send({ message: "Your phoneNumber is too long" });
  }

  const driver = new Drivers({
    firstName,
    lastName,
    login,
    password,
    phoneNumber,
    car,
    tripIds,
  });
  const doc = await driver.save();

  return res.status(200).send(doc);
};
