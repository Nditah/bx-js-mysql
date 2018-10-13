

const db = require('../connection');
const Sequelize = require('sequelize')

module.exports  = db.define('blogs', {
    title : Sequelize.STRING,
    author : Sequelize.INTEGER,
    summary : Sequelize.STRING,
    body : Sequelize.TEXT,
    images : Sequelize.STRING,
    url : Sequelize.STRING,
    keywords : Sequelize.STRING,
    placeholders : Sequelize.STRING,
    standing : Sequelize.ENUM(''),
    created_at : Sequelize.DATE,
    updated_at : Sequelize.DATE
},{
    timestamps : false, 
})