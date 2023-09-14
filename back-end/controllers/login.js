const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const login =  async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } }).catch((error) => {
      console.log("error getting user s email", error);
    });

    if (user === null) {
      return res.json({ message: "Wrong email or password" });
    }

    let isSamePwd = bcrypt.compareSync(password, user.password);

    if (isSamePwd !== "true") {
      res.json({ message: "Wrong email or password" });
      return;
    }

    const jwtoken = jwt.sign(
      {
        username: username,
        email: email,
        password: hashedPassword
      },
      process.env.MY_SECRET_TOKEN,
      {expiresIn: "1d"}
    );

    res.json({ message: "welcome back", token: jwtoken });
  } catch (error) {
    console.log("An error occured while signing in user", error);
  }
};

// get user info
router.get("/user/login", async (req, res) => {
  const email = req.body["Email Address"];
  console.log("this is email", email);
  let userInfo = await User.findOne({ where: { email } }).catch((err) =>
    console.log("An error occured", err)
  );

  res.send(userInfo);
});

// router.get("/users/login", async (req, res) => {
//   let users = await User.findAll()
//   res.send(users)
// })

module.exports = {login};
