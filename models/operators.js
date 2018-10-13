

const db = require('../connection');
const Sequelize = require('sequelize')
const bcrypt = require("bcrypt-nodejs")

module.exports  = db.define('operators', {
    email: {
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: 'Oops. Looks like you already have an account with this email address. Please try to login.',
            fields: [Sequelize.fn('lower', Sequelize.col('email'))]
        },
        validate: {
            isEmail: {
                args: true,
                msg: 'The email you entered is invalid or is already in our system.'
            },
            max: {
                args: 254,
                msg: 'The email you entered is invalid or longer than 254 characters.'
            }
        }
    },
    domain : Sequelize.STRING,
    subDomain : Sequelize.STRING,
    description : Sequelize.STRING,
    domainName : Sequelize.STRING,
    businessName : Sequelize.STRING,
    businessAddress : Sequelize.STRING,
    businessEmail : Sequelize.STRING,
    businessOwner_address : Sequelize.STRING,
    businessOwner_email : Sequelize.STRING,
    businessOwner_name : Sequelize.STRING,
    password : Sequelize.STRING,
    //fullname : Sequelize.STRING,
    //address : Sequelize.STRING,
    //role : Sequelize.STRING,
    standing : Sequelize.ENUM('')
},{
    timestamps : false,
    indexes: [{unique: true,fields: ['email']}],
    hooks : {
        beforeCreate : (user, option) => new Promise((resolve, reject) => {
            bcrypt.hash(user.password,null,null,(err,hash) => {
                if(err) return reject(err)
                user.password = hash;
                resolve(user)
            })
        })
    }     
})