const Sequelize = require('sequelize');
let url = process.env.DATABASE_URL;
const sequelize = new Sequelize(url, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
});
module.exports = sequelize;
