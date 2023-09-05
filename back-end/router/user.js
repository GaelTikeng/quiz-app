const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/user/signup", async (req, res) => {
  let { username, email, password } = req.body;

  await User.create({
    username: username,
    email: email,
    password: password
  })

  res.send({
    username,
    email,
    password
  })
});

module.exports = router