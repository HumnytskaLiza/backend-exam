const { Router } = require("express");

const DriversAPI = require("./drivers.api");
const TripsAPI = require("./users.api");
const UsersAPI = require("./trips.api");

const router = Router();

router.use(DriversAPI.router);
router.use(TripsAPI.router);
router.use(UsersAPI.router);

module.exports = { router };
