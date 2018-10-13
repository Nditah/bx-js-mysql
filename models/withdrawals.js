

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('withdrawals', {
            amount : Sequelize.DOUBLE,
            userType : Sequelize.ENUM('exchange','trader'),
            userId : Sequelize.INTEGER,
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    