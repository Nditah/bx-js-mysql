

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('notifications', {
            userId : Sequelize.INTEGER,
            message: Sequelize.STRING,
            sentAt : Sequelize.DATE,
            standing : Sequelize.ENUM('read','unread'),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    