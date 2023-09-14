const User = require('../models/user')
const jwt = require ('jsonwebtoken')
const bcrypt = require("bcryptjs");


const createUser = async (req, res) => {
  let { username, email, password } = req.body;

  // hash pwd
  let hashedPassword = bcrypt.hashSync(password, 10)
  console.log('This is password by bcrypt', hashedPassword)

  // generating Token
  const jwtoken = jwt.sign(
    {
      username: username,
      email: email,
      password: hashedPassword
    },
    process.env.MY_SECRET_TOKEN,
    {expiresIn: "1d"}
  );

  await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.send({token: jwtoken})
}

module.exports = {
  createUser
}