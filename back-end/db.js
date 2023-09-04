  const {Sequelize} = require('sequelize')

// console.log("this is the process", process.env)
const sequel = new Sequelize(
  'quiz',
  'root',
  'W@2915djkq#',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
)

sequel
  .authenticate()
  .then(() => {
    console.log('Connection to db successful')
  })
  .catch((error) => {
    console.error('unable to connect to DB: ', error)
  })


  module.exports = sequel 