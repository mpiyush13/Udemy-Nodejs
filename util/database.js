const Sequelize = require('sequelize');

const sequelize = new Sequelize('note-schema', 'root', 'piyush1234', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
