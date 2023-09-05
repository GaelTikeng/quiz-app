const { DataTypes } = require("sequelize");
const sequel = require("../db");
const User = require('./user')


const Quiz = sequel.define('quiz', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER
  }
})

User.hasMany(Quiz)
Quiz.belongsTo(User)

sequel
  .sync({force: true})
  .then(() => {
    console.log("Quiz table created successfully")
  })
  .catch((error) => {
    console.log("error occured while creating table", error)
  })

module.exports = Quiz;