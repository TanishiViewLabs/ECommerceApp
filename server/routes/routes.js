const express = require("express");
const router = express.Router();
const signup = require("../controller/Registeration/signUp");
const passport = require("passport");
const User = require("../modles/UserData");
const forgetPass = require("../controller/Registeration/forgotPass");
const newPass = require("../controller/Registeration/newPass");
router.get("/", (req, res) => {
  res.send({ result: "The setup of backend server was completed" });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/sucess",
    failureRedirect: "/failure",
    failureFlash: true,
  })
);

router.get("/sucess", async (req, res) => {
  const currID = req.session.passport.user;
  const userData = await User.findOne({ _id: currID });
  res.send({ data: userData, staus: "success" });
});

router.get("/failure", (req, res) => {
  res.send({ status: "fail" });
});
router.post("/forget", forgetPass.resetPass);
router.post("/signup", signup.registerData);
router.post("/reset/:token", newPass.changePassword);
// router.get("/dashboard");
module.exports = router;
