const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } }).catch((error) => {
      console.log("error getting user s email", error);
    });

    if (!user) {
      return res.json({ message: "Wrong email or password" });
    }
    if (user.password !== password) {
      return res.json({ message: "Wrong email or password" });
    }

    const jwtoken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        password: user.password,
      },
      process.env.MY_SECRET_TOKEN
    );
    res.json({ message: "welcome back", token: jwtoken });
  } catch (error) {
    console.log("An error occured while signing in user", error);
  }
});

module.exports = router;
