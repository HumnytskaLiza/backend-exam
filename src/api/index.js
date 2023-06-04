const { Router } = require("express");

const DriversAPI = require("./drivers.api");

const router = Router();

router.use(DriversAPI.router);

module.exports = { router };
