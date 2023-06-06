const express = require("express");
const router = express.Router();
const stripeBuyOne = require("../controller/Payment/Stripe/singleOrder");
const checkLogin = require("../middleware/checkLogin");

router.post(
  "/stripeOneOrder",
  checkLogin.isAuthenticated,
  stripeBuyOne.userOrder
);
module.exports = router;
