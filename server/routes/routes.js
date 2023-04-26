const express = require("express");
const router = express.Router();
const signup = require("../controller/signUp");
const passport = require("passport");
const User = require("../modles/UserData");
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
  res.send(userData);
});

router.get("/failure", (req, res) => {
  res.send({ result: "The login was failed" });
});

router.post("/signup", signup.registerData);
module.exports = router;
