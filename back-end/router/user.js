const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

router.post("/user/signup", async (req, res) => {
  let { username, email, password } = req.body;
  let hashedPassword;

  try {
    bcrypt
      .hash(password, 10)
      .then((hash) => {
        hashedPassword = hash;
        console.log("this is the hashed pwd", hash);
      })
      .catch((err) => console.log("error while hashing", err));

    const alreadyExistUser = await User.findOne({ where: { email } }).catch(
      (err) => console.log("error getting user", err)
    );
    if (alreadyExistUser) return res.send("User already exist with this same email");

    await User.create({
      username: username,
      email: email,
      password: password,
    });

    res.send({
      username,
      email,
      password,
    });
  } catch (error) {
    console.log("error while creating user", error);
  }
});

module.exports = router;
