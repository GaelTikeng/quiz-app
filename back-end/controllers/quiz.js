const Quiz = require("../models/quiz");
const Question = require("../models/question");
const Option = require("../models/option");
const User = require("../models/user");

// get quizzes by id
const getQuizByID = async (req, res) => {
  const { id } = req.user;
  const quizId = req.params.quizId;

  const existingUser = await User.findOne({ where: { id } });

  if (existingUser !== null) {
    try {
      let quiz = await Quiz.findOne({
        where: { quizId: quizId },
        include: {
          model: [Question, Option],
        },
      });

      res.send(quiz);
    } catch (error) {
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res.status(404).send({ message: "Unauthorized! Sign up first" });
  }
};

// get quiz per userId
const getQuizzes = async (req, res) => {
  const user = req.user;

  try {
    const existingUser = await User.findOne({ where: { email: user.email }});

    if (existingUser !== null) {
      const id = req.params.userId;

      console.log("this is id", id);
      const userQuiz = await Quiz.findAll({
        where: { userId: id },
      });

      return res.send(userQuiz);
    } else {
      res.send("Access forbidden");
    }
  } catch (err) {
    console.log("error while getting quiz", err);
  }
};

// create quiz
const createQuiz = async (req, res) => {
  const quiz = req.body.quiz;
  const { userId } = req.params;
  try {
    await Quiz.create({
      title: quiz,
      // userId: userId,
    });
    res.status(200).send(quiz);
  } catch (err) {
    console.log("An error occured while creating quiz", err);
  }
};

module.exports = {
  getQuizzes,
  createQuiz,
  getQuizByID,
};
