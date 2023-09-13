const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const createError = require("http-errors");
const app = express();
const User = require("./models/user");
const Quiz = require("./models/quiz");
const Participant = require("./models/participant");
const Question = require("./models/question");
const Option = require("./models/option");

require("./auth/password");

app.use(cors())
app.use(express.json());
app.use(morgan('dev'))

let userRouter = require("./router/user");
let loginRouter = require("./router/login");
let participantRouter = require("./router/participantInfo");
let dashboardRouter = require('./router/dashboard')

// view engine setup
app.set("view engine", "hps");

// middlewares
app.use("/", userRouter);
app.use("/", loginRouter);
app.use("/", participantRouter);
app.use('/', dashboardRouter)

// app.get("/", (req, res) => {
//   return res.json("From backend side");
// });

app.listen(3000, () => {
  console.log("listening to port 3000");
});
