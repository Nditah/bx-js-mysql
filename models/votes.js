

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('votes', {
            userType : Sequelize.ENUM('exchange','trader'),
            transaction_amount : Sequelize.DOUBLE,
            transaction_currency : Sequelize.STRING,
            pollId : Sequelize.INTEGER,
            choice : Sequelize.ENUM('yes','no'),
            comment : Sequelize.STRING,
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    