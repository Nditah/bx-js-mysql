

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('settings', {
            value : Sequelize.STRING,
            name : Sequelize.STRING,
            description : Sequelize.STRING,
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    