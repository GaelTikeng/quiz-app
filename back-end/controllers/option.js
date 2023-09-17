const Option = require("../models/option");

const createOption = async (req, res) => {
  const option = req.body.option;

  for (const opt of option) {
    await Option.bulkCreate({
      title: opt.title,
      isCorrect: opt.iscorrect,
    });
  }
};

module.exports = { createOption };
