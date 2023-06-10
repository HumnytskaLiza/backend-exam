const { Router } = require("express");
const { wrapperApi } = require("../shared");

const { users } = require("./handlers");
const router = Router();

router.get("/users", wrapperApi(users.getUsers));
router.post("/users", wrapperApi(users.postUsers));

module.exports = { router };
