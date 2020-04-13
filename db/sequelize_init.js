/**
 * 
 * The exports for the Sequelize object. 
 * Import this into your module to get access the to 
 * ORM
 */
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.db'
});

sequelize
  .sync() //syncing here is just for testing connection.
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;