

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('polls', {
            name : Sequelize.STRING,
            title : Sequelize.STRING,
            description : Sequelize.STRING,
            kind : Sequelize.ENUM('coin','others'),
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    