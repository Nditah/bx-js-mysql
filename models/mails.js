

        const db = require('../connection');
        const Sequelize = require('sequelize')

        module.exports  = db.define('mails', {
            subject: Sequelize.STRING,
            recipient : Sequelize.STRING,
            message : Sequelize.TEXT,
            sentAt : Sequelize.DATE,
            standing : Sequelize.ENUM(''),
            created_at : Sequelize.DATE,
            updated_at : Sequelize.DATE
        },{
            timestamps : false,
            hooks : {
                beforeCreate : function(mail, options){
                    mail.sentAt = Date.now()
                }
            } 
        })
    