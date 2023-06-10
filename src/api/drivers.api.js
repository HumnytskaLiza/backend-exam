const { Router } = require("express");
const { wrapperApi } = require("../shared");

const { drivers } = require("./handlers");
const router = Router();

router.post("/drivers", wrapperApi(drivers.postDrivers));
router.get("/drivers/_:id/trips", wrapperApi(drivers.getDriversTrips));
router.get("/drivers", wrapperApi(drivers.getDrivers));
router.patch("/drivers/_:id/car", wrapperApi(drivers.updateDriver));

module.exports = { router };
