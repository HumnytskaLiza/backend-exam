const { Router } = require("express");
const { wrapperApi } = require("../shared");

const { drivers } = require("./handlers");
const router = Router();

// const priceMiddleware = ({ isOptional }) => (req, res, next) => {
//     const { price } = req.body;
//     const needCheck = isOptional ? price != null : true;
//     if (needCheck && price <= 0) {
//         return res.status(400).send({
//             message: `Price must be more than 0`
//         });
//     }
//     return next();
// };

// router.post(
//   "/drivers",
//   //   priceMiddleware({ isOptional: false }),
//   wrapperApi(drivers.createDriver)
// );

// router.patch(
//   "/dishes/:_id ",
//   priceMiddleware({ isOptional: true }),
//   wrapperApi(dishes.updateDish)
// );

router.get("/drivers", wrapperApi(drivers.getDrivers));
router.delete("/drivers/:_id", wrapperApi(drivers.deleteDriver));
module.exports = { router };
