

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('templates', {
            name : Sequelize.STRING,
            page : Sequelize.STRING,
            theme : Sequelize.STRING,
            icon : Sequelize.STRING,
            description : Sequelize.STRING,
            placeholder : Sequelize.STRING,
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    