const express = require("express");
const router = express.Router();
const Quiz = require("../models/quiz");
const Question = require("../models/question");
const Option = require("../models/option")

// get all quizzes belonging to one user
router.get("/dashboard/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    let allQuizzes = await Quiz.findAll({
      where: {
        userId: userId,
      }
    });

    res.send(allQuizzes);
  } catch (error) {
    console.log("Error while getting quizzes", error);
  }
});

// get allquestions for a particular quiz
router.get("/dashboard/:userId/:quizId", async (req, res) => {
  const { userId, quizId } = req.params;

  try {
    let allQuestions = await Question.findAll({
      where: {
        quizId: quizId,
      },
      include: {
        model: Option,
      }
    });

    // let allOptionsPerQuestionId = await Option.findAll({
    //   where: {
    //     questionId:
    //   }
    // })

    res.send(allQuestions);
  } catch (error) {
    console.log("error occured", error);
  }
});

router.post("/dashboard/:userId/createquiz", async (req, res) => {
  let quizTitle = req.body["quizTitle"];
  let { userId } = req.params;
  let question = req.body["question1"];
  let opt1 = req.body["optionA"];
  let opt2 = req.body["optionB"];
  let opt3 = req.body["optionC"];
  let opt4 = req.body["optionD"];
  let isCorrect = req.body["answer"];

  let proposition = {
    option1: opt1,
    option2: opt2,
    option3: opt3,
    option4: opt4,
    isCorrect: isCorrect,
  };

  try {
    let quiz = { title: quizTitle, userId: userId };
    await Option.create(proposition);

    await Quiz.create(quiz);

    await Question.create({
      question: question
    });

    res.send({
      quizDetails: quiz,
      question: question,
      answerOptions: proposition
    });
  }
  catch(error) {
    console.log('could not set quiz', error)
  }
});

module.exports = router;
