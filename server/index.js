const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const routes = require("./routes/routes");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const User = require("./modles/UserData");
dotenv.config();
app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

const initializePassport = require("./config/passport-config");
initializePassport(
  passport,
  (email) => {
    return User.findOne({ email: email });
  },
  (id) => {
    return User.findOne({ _id: id });
  }
);
const PORT = process.env.PORT;
const URL = process.env.MONGOURL;
connectDB(URL);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
