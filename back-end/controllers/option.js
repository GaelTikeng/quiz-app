const Option = require("../models/option");

const createOption = async (req, res) => {
  const option = req.body.option;

  let proposition
  for (const opt of option) {
    proposition = await Option.bulkCreate({
      title: opt.title,
      isCorrect: opt.iscorrect,
    });
  }

  res.json({proposition})
};

module.exports = { createOption };
