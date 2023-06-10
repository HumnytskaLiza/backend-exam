const { Types } = require("mongoose");
const { Trips, Users } = require("../../../models");

module.exports.updateTrip = async (req, res) => {
  const { _id } = req.params;
  const { userId, count } = req.body;
  const update = {};
  if (userId) {
    const user = await Users.findOne({ _id: userId });
    if (user) {
      update["userIds[0]._id"] = userId;
      if (count) {
        update["userIds[0].count"] = count;
      }
    }
    if (!user) {
      return res.status(400).send({ message: "User was not found" });
    }
  }

  const doc = await Trips.findOneAndUpdate(
    { _id: Types.ObjectId(_id) },
    { $set: update },
    { isNew: true }
  );
  return res.status(200).send(doc);
};

/*
module.exports.updateDish = async (req, res) => {
 const { price, isAvailable } = req.body;
 const { _id } = req.params;
 const update = {};
 if (price) {
  update.price = price;
 }

 if (isAvailable !== undefined) {
  update.isAvailable = isAvailable;
 }

 const doc = await Dishes.findOneAndUpdate(
  { _id: Types.ObjectId(_id) },
  { $set: update },
  { isNew: true }
 );

 return res.status(200).send(doc);
};
*/
