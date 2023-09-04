const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const sequel = require('./db')

const app = express()

app.use(cors())

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "W@2915djkq#",
//   database: "quiz",
// });

app.get("/", (req, res) => {
  return res.json("From backend side");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
