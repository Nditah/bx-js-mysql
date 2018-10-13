

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('markets', {
            name : Sequelize.STRING,
            title : Sequelize.STRING,
            description : Sequelize.STRING,
            pair : Sequelize.STRING,
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    