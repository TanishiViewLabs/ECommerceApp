const express = require("express");
const router = express.Router();
const signup = require("../controller/Registeration/signUp");
const passport = require("passport");
const User = require("../modles/UserData");
const forgetPass = require("../controller/Registeration/forgotPass");
const newPass = require("../controller/Registeration/newPass");
const registerData = require("../controller/Products/registerData");
const multer = require("multer");
const storage = require("../config/multerConfig");
const checkLogin = require("../config/checkLogin");
const adminProducts = require("../controller/Products/getAdminProducts");
const updateAdminProduct = require("../controller/Products/updateAdminProduct");
const deleteAdminProduct = require("../controller/Products/deleteAdminProduct");
router.get("/", (req, res) => {
  res.send({ result: "The setup of backend server was completed" });
});
const upload = multer({ storage });

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
router.get(
  "/adminProducts",
  checkLogin.isAuthenticated,
  adminProducts.getProducts
);
router.post("/forget", forgetPass.resetPass);
router.post("/signup", signup.registerData);
router.post("/reset/:token", newPass.changePassword);
router.post(
  "/updateProduct",
  checkLogin.isAuthenticated,
  updateAdminProduct.updateProducts
);
router.post(
  "/insertProduct",
  upload.single("image"),
  checkLogin.isAuthenticated,
  registerData.insertProduct
);
router.post(
  "/deleteProduct",
  checkLogin.isAuthenticated,
  deleteAdminProduct.deleteProduct
);
module.exports = router;
