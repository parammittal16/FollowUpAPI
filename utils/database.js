const Sequelize = require('sequelize');

// const sequelize = new Sequelize(
//     'dd0i4vp4b58dq1', 
//     'vehffbqamvhnci', 
//     'e9ad7bb1267dfe6a9f62fb2c11a9b04a6efe1ba99df8d6b5101d785c7c92ad0c', 
//     {
//         dialect: 'postgres', 
//         host: 'ec2-23-21-171-25.compute-1.amazonaws.com',
//         ssl: true,
//         operatorsAliases: false
//     });
const sequelize = new Sequelize(process.env.DATABASE_URL);
module.exports = sequelize;