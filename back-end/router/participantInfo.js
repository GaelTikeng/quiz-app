const express = require("express");
const router = express.Router();
const Participant = require("../models/participant");

router.post("/student/:quizId", async (req, res) => {
  const name = req.body["Full name"];
  const email = req.body["Email address"];
  const { quizId } = req.params();

  try {
    console.log(name);
    console.log("participant email");
    await Participant.create({
      name: name,
      email: email,
      quizId: quizId,
    });

    res.send({
      participantName: name,
      participantEmail: email,
    });
  } catch (error) {
    console.log("could not save student credentials", error);
  }
});

module.exports = router;
