const express = require("express");
const router = express.Router();
const registerRoute = require("./Register");
const profileRoute = require("./Profile");
const productRoute = require("./Product");
const cartRoute = require("./Cart");
const orderRoute = require("./Order");
const reviewRoute = require("./Review");
const paymentRoute = require("./Payment");
router.use("/register", registerRoute);
router.use("/profile", profileRoute);
router.use("/product", productRoute);
router.use("/cart", cartRoute);
router.use("/order", orderRoute);
router.use("/review", reviewRoute);
router.use("/payment", paymentRoute);
router.get("/", (req, res) => {
  res.status(201).send({
    status: "success",
    message: "The setup of backend server is successful",
  });
});

module.exports = router;
