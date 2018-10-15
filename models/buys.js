

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('buys', {
            amount : Sequelize.DOUBLE,
            standing : Sequelize.ENUM('pending','closed'),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    