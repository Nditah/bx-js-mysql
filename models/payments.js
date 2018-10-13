

const db = require('../connection');
const Sequelize = require('sequelize')

module.exports  = db.define('payments', {
    amount : Sequelize.DOUBLE,
    user : Sequelize.INTEGER,
    vendor : Sequelize.INTEGER,
    meta : Sequelize.JSON,
    status : Sequelize.STRING,
    confirm_meta : Sequelize.JSON,
    standing : Sequelize.ENUM('pending','close'),
    created_at : Sequelize.DATE,
    updated_last : Sequelize.DATE
},{
    timestamps : false, 
})