const Quiz = require("../models/quiz");
const Question = require("../models/question");
const Option = require("../models/option");
const User = require("../models/user");

// get quizzes by id
const getQuizByID = async (req, res) => {
  const { id } = req.user;

  const existingUser = await User.findOne({ where: { id } });

  if (existingUser !== null) {
    try {
      let allQuizzes = await Quiz.findAll({
        where: { userId: id },
        include: {
          model: [Question, Option],
        },
      });

      res.send(allQuizzes);
    } catch (error) {
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res.status(404).send({ message: "Unauthorized! Sign up first" });
  }
};

// get quiz for a particular user
const getQuizzes = async (req, res) => {
  const { userId } = req.params;

  const userQuiz = await Quiz.findAll({
    where: { userId }
  });

  return res.send(userQuiz);
};



// create questions
const createQuestions = async (req, res) => {};

module.exports = {
  getQuizzes,
  createQuestions,
  getQuizByID
};
