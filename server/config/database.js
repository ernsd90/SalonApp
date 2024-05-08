const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u883623029_salonDev', 'u883623029_salonDev', 'password', {
    host: '217.21.90.52',
    dialect: 'mysql'
});

module.exports = sequelize;
