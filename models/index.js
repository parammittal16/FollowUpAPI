const Sequelize = require("sequelize");
const sequelize = require('../utils/database');
// pass your sequelize config here

const Users = require("./users");
const Candidates = require('./candidates');


const models = {
  Users: Users,
  Candidates: Candidates
  
};

const db = {
  ...models,
  sequelize
};

module.exports = db;