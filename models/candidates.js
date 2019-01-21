const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Candidate = sequelize.define('candidate', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    organisation: {
        type: Sequelize.STRING,
        allowNull: true
    },
    branch: {
        type: Sequelize.STRING,
        allowNull: true
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    mobNo: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            is: ["/^[6-9][0-9]{9}$/"]
        }
    }
}
);

module.exports = Candidate;