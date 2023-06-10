const { Router } = require("express");
const { wrapperApi } = require("../shared");

const { drivers } = require("./handlers");
const router = Router();

router.post("/drivers", wrapperApi(drivers.postDrivers));
router.get("/drivers/:_id/trips", wrapperApi(drivers.getDriversTrips));
router.patch("/drivers/:_id/car", wrapperApi(drivers.updateDriver));

module.exports = { router };
