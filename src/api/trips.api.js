const { Router } = require("express");
const { wrapperApi } = require("../shared");

const { trips } = require("./handlers");
const router = Router();

router.get("/trips", wrapperApi(trips.getTrips));
router.get("/trips/:_id", wrapperApi(trips.getTripById));
router.post("/trips", wrapperApi(trips.postTrips));
router.patch("/trips/:_id", wrapperApi(trips.updateTrip));

module.exports = { router };
