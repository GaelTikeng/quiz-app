const Question = require("../models/question");
const Option = require("../models/option");


// get all questions per quiz
const getQuestion = async (req, res) => {
  const { quizId } = req.params;

  try {
    let allQuestions = await Question.findAll({
      where: {
        quizId: quizId,
      },
      include: {
        model: Option,
      },
    });

    res.send(allQuestions);
  } catch (err) {
    console.log("error occured while creating quiz", err);
  }
};

// create questions
const createQuestion = async (req, res) => {
  
  const questions = req.body.questions

  let kestion
  for (const quest of questions) {
    kestion = await Question.bulkCreate({question: quest})
  }

  res.send(kestion)
}

module.exports = {
  getQuestion,
  createQuestion
}