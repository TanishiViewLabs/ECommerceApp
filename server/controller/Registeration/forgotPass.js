const User = require("../../modles/UserData");
const transporter = require("../../config/connectEmail");
let userUrl = `http://localhost:${process.env.FRONTENDPORT}/NewPassword/`;
const resetPass = async (req, res) => {
  const { email } = req.body;
  const isPresentEmail = await User.find({ email: email });
  if (isPresentEmail == null) {
    res.send({ status: "fail", message: "This email dosen't exists" });
  } else {
    userUrl = userUrl + isPresentEmail[0]._id;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reset you password",
      text: `Please click on the following to reset your password ${userUrl}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent " + info);
      }
    });
    res.send({
      status: "success",
      message: "The link was sent to you email",
      data: userUrl,
    });
  }
};
module.exports = { resetPass };
