const jwt = require ('jsonwebtoken')
require('dotenv').config()

const JWT_SECRETE_KEY = process.env.MY_SECRET_TOKEN || ""

const VerifyAuthToken = (token) => {
  return jwt.verify(token, JWT_SECRETE_KEY)
}
module.exports = VerifyAuthToken