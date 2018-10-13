

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('fees', {
            name : Sequelize.STRING,
            description : Sequelize.STRING,
            amount : Sequelize.DOUBLE,
            kind : Sequelize.ENUM('fixed','percentage'),
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    