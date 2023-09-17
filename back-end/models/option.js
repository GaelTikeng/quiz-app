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
  },
  isCorrect: {
    type: DataTypes.ENUM("true", "false")
  },
  questionId: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false
})

Question.hasMany(Option, {
  foreignKey: 'questId'
})
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