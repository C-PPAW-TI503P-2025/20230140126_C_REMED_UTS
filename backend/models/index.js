const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Book = require('./book')(sequelize, Sequelize);
db.BorrowLog = require('./borrowLog')(sequelize, Sequelize);

module.exports = db;