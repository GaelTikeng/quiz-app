const express = require("express");
const router = express.Router();
const Participant = require('../models/participant')


router.post('/student', async (req, res) => {
  const name = req.body['Full name']
  const email = req.body['Email address']

  try {
    console.log(name)
    console.log('participant email', )
    await Participant.create({
      name: name,
      email: email
    })

    res.send({
      participantName: name,
      participantEmail: email
    })
  }
  catch (error) {
    console.log("could not save student credentials", error)
  }
})













module.exports = router