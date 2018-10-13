

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('currencies', {
            name : Sequelize.STRING,
            title : Sequelize.STRING,
            description : Sequelize.STRING,
            kind : Sequelize.ENUM('digital','flat'),
            symbol : Sequelize.STRING,
            rate : Sequelize.DOUBLE,
            icon : Sequelize.STRING,
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false, 
        })
    