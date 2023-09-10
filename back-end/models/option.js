const {DataTypes} = require('sequelize')
const sequel = require('../db')
const Question = require("./question")

const Option = sequel.define('option', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  option1: {
    type: DataTypes.STRING,
  },
  option2: {
    type: DataTypes.STRING,
  },
  option3: {
    type: DataTypes.STRING,
  },
  option4: {
    type: DataTypes.STRING,
  },
  isCorrect: {
    type: DataTypes.STRING,
    allowNull: false
  },
  questionId: {
    type: DataTypes.INTEGER
  }
})

Question.hasMany(Option)
Option.belongsTo(Question)

sequel
  .sync()
  .then(() => {
    console.log('option table created successfully')
  })
  .catch((error) => {
    console.log("An error occured while creating question table", error)
  })


module.exports = Option