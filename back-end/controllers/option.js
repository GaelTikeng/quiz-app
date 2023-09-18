const Option = require("../models/option");

const createOption = async (req, res) => {
  const option = req.body.option;

  let proposition;
  console.log(option);
  try {
    proposition = await option?.map((opt) =>
      Option.create({
        title: opt.title,
        questionId: opt.questionId,
        iscorrect: opt.isCorrect,
      })
    );
    res.send(proposition).status(200);
  } catch (err) {
    console.log("error occures while creating options", err);
    res.send("Something went wrong").status(500);
  }
};

module.exports = { createOption };
