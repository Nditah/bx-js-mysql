

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('tickets', {
            title : Sequelize.STRING,
            description : Sequelize.STRING,
            urgency : Sequelize.STRING,
            date : Sequelize.DATE,
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    