const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post("/account/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } }).catch((error) => {
      console.log("error getting user s email", error);
    });

    if (!user) {
      return res.json({ message: "Wrong email or password" });
    }

    let isSamePwd = bcrypt.compareSync(password, user.password);
    // console.log(isSamePwd)
    // console.log(user.password)

    if (isSamePwd !== "true") {
      // throw createError.Conflict('email already exist in database')
      res.json({ message: "Wrong email or password" });
      return;
    }

    res.json({ message: "welcome back", token: jwtoken });
  } catch (error) {
    console.log("An error occured while signing in user", error);
  }
});

// get user info
router.get("/user/login", async (req, res) => {
  const email = req.body["Email Address"];
  console.log('this is email', email)
  let userInfo = await User.findOne({ where: { email } }).catch(err => console.log('An error occured', err))
  
  res.send(userInfo)
});

module.exports = router;
