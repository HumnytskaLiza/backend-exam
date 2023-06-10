const { Trips } = require("../../../models");

module.exports.getTrips = async (req, res) => {
  let { price, start, end } = req.query;
  const queryDb = {};
  if (start) {
    const parsedStart = JSON.parse(start);
    queryDb["date.start"] = parsedStart;
  }
  if (end) {
    const parsedEnd = JSON.parse(end);
    queryDb["date.end"] = parsedEnd;
  }

  if (price) {
    if (price <= 0) {
      return res
        .status(400)
        .send({ message: "Price should be greater than zero" });
    }
    const parsedPrice = JSON.parse(price);
    if (parsedPrice.gt) {
      queryDb.price = { $gt: parsedPrice.gt };
    }
    if (parsedPrice.lt) {
      queryDb.price = { $lt: parsedPrice.lt };
    }
    if (parsedPrice.gt && parsedPrice.lt) {
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
