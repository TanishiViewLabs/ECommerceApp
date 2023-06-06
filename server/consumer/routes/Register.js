const express = require("express");
const router = express.Router();
const signup = require("../controller/Registeration/signUp");
const forgetPass = require("../controller/Registeration/forgotPass");
const newPass = require("../controller/Registeration/newPass");
const ConsumerService = require("../services/ConsumerService");
const passport = require("passport");
const initializePassport = require("../config/passport-config");
const googleInitialize = require("../config/googleAuth");
initializePassport(
  passport,
  async (email) => {
    return await ConsumerService.findUserByEmail(email);
  },
  async (id) => {
    return await ConsumerService.consumerDataByID(id);
  }
);
googleInitialize(
  passport,
  async (email) => {
    return await ConsumerService.findUserByEmail(email);
  },
  async (id) => {
    return await ConsumerService.consumerDataByID(id);
  }
);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/failure",
    failureFlash: true,
  })
);
router.get("/success", async (req, res) => {
  const currID = req.session.passport.user;
  try {
    const ConsumerData = await Consumer.findOne({ _id: currID });
    res.status(200).send({ data: ConsumerData, staus: "success" });
  } catch (err) {
    res.status(500).send({
      staus: "fail",
      message: `An error has occured ${err}`,
    });
  }
});
router.get("/failure", (req, res) => {
  res
    .status(403)
    .send({ status: "fail", message: "Please recheck your creadentials" });
});
router.post("/signup", signup.registerData);
router.post("/forget", forgetPass.resetPass);
router.post("/reset/:token/:id", newPass.changePassword);
router.get(
  "/googleAuth",
  passport.authenticate("google", { failureRedirect: "/failure" }),
  (req, res) => {
    res.redirect("/success");
  }
);
module.exports = router;
