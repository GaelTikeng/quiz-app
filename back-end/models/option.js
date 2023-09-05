const {DataTypes} = require('sequelize')
const sequel = require('../db')
const Question = require("./question")

const Option = sequel.define('option', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
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

sequel.authenticate().then(() => {
  console.log("option table created successfully")
})
.catch((err) => {
  console.log('Cannot create Option table: ', err)
})

module.exports = Option