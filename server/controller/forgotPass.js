const User = require("../modles/UserData");
const transporter = require("../config/connectEmail");
let userUrl = "http://localhost.com/";
const resetPass = async (req, res) => {
  res.send("herqeq");
};
module.exports = { resetPass };
