const { Trips } = require("../../../models");

module.exports.getTrips = async (req, res) => {
  let { date, price } = req.query;
  const queryDb = {};
  if (date) {
    const parsedDate = JSON.parse(date);
    if (parsedDate.start) {
      queryDb.date = { $gt: new Date(parsedDate.start) };
    } else if (parsedDate.end) {
      queryDb.date = { $lt: new Date(parsedDate.end) };
    } else if (parsedDate.start && parsedDate.end) {
      queryDb.date = {
        $gt: new Date(parsedDate.start),
        $lt: new Date(parsedDate.end),
      };
    }
  }
  if (price) {
    const parsedPrice = JSON.parse(price);
    if (parsedPrice.gt) {
      queryDb.price = { $gt: parsedPrice.gt };
    } else if (parsedPrice.lt) {
      queryDb.price = { $lt: parsedPrice.lt };
    } else if (parsedPrice.gt && parsedPrice.lt) {
      if (parsedPrice.gt > parsedPrice.lt || parsedPrice.gt == parsedPrice.lt) {
        return res
          .status(400)
          .send({ message: "You have entered wrong values" });
      }
      queryDb.price = { $gt: parsedPrice.gt, $lt: parsedPrice.lt };
    }
  }

  const docs = await Trips.find(queryDb);
  return res.status(200).send(docs);
};
