

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('translations', {
            name : Sequelize.STRING,
            english : Sequelize.STRING,
            language1 : Sequelize.STRING,
            language2 : Sequelize.STRING,
            language3 : Sequelize.STRING,
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    