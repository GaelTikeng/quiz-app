const { DataTypes } = require("sequelize");
const sequel = require('../db')
const Quiz = require('./quiz')

const Question = sequel.define("question", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question: {
    type: DataTypes.STRING(1024),
    allowNull: false
  },
  quizId: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },
})

Quiz.hasMany(Question, {
  foreignKey: "quizId"
})
Question.belongsTo(Quiz)

sequel
  .sync()
  .then(() => {
    console.log('question table created successfully')
  })
  .catch((error) => {
    console.log("An error occured while creating question table", error)
  })

module.exports = Question

