const express = require("express");
const router = express.Router();
const Participant = require("../models/participant");

// Create student
const createParticipant = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const { quizId } = req.params;

  try {
    console.log("My name is :", name);
    console.log("participant email :", email);
    await Participant.create({
      name: name,
      email: email,
      quizId: quizId,
    });

    let studentCedential = {
      participantName: name,
      participantEmail: email
    };
    
    res.send(studentCedential);
  } catch (error) {
    console.log("could not save student credentials", error);
    throw error;
  }
};

module.exports = { createParticipant };
