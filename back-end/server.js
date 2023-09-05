const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const sequel = require('./db')
require('dotenv').config()
const app = express()
const User = require('./models/user')
const Quiz = require('./models/quiz')
const Participant = require('./models/participant')
const Question = require('./models/question')
const Option = require('./models/option')

app.use(cors())
app.use(express.json());

let userRouter = require('./router/user')





// middlewares
app.use('/', userRouter)

// app.get("/", (req, res) => {
//   return res.json("From backend side");
// });

app.listen(3000, () => {
  console.log("listening to port 3000");
});
