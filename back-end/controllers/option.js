const Option = require("../models/option");

const createOption = async (req, res) => {
  const options = req.body.options;

  console.log('front-end', options)

  try {
    await options?.map((opt) =>
      Option.create({
        title: opt.text,
        questionId: opt.questionId,
        iscorrect: opt.isCorrect,
      })
    );
    res.send("Options posted successfully").status(200);
  } catch (err) {
    console.log("error occures while creating options", err);
    res.send("Something went wrong").status(500);
  }
};

module.exports = { createOption };
