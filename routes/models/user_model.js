var sequelize = require('../../db/sequelize_init')
const { Sequelize, Model, DataTypes } = require('sequelize');

/**
 * Sequelize Model for storing the user data
 * For now this is a very simple table with 
 * first name , last name apikey and userID as 
 * the main input colums
 * 
 * please Sequelize docs for the other default colums
 * that are also added.
 */
class User extends Model {}
User.init({
    // attributes
    userID: {
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