var sequelize = require('../db/sequelize_init') 
const { Sequelize, Model, DataTypes } = require('sequelize');

class User extends Model {}
User.init({
  // attributes
  userID:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  apikey: {
    type: Sequelize.STRING,
    allowNull: false 
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});

sequelize.sync();

module.exports = User;