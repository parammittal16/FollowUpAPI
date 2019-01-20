const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        role: {
            type: Sequelize.NUMERIC,
            validate: {
                is: ["[0-2]"]
            }
        } 
    },
    {
        hooks: {
            beforeCreate: (user, options) => {
                return bcrypt.hash(user.password, 10).then((hash) => {
                    user.password = hash;
                });
            }
        }
    }
);

module.exports = User;