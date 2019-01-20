const Sequelize = require('sequelize');
let url = process.env.DATABASE_URL || "postgres://vehffbqamvhnci:e9ad7bb1267dfe6a9f62fb2c11a9b04a6efe1ba99df8d6b5101d785c7c92ad0c@ec2-23-21-171-25.compute-1.amazonaws.com:5432/dd0i4vp4b58dq1"; 

const sequelize = new Sequelize(url, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
});
module.exports = sequelize;