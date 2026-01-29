const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_remedial_ucp1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false 
});

module.exports = sequelize;