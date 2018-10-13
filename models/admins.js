

const db = require('../connection');
const Sequelize = require('sequelize')
const bcrypt = require("bcrypt-nodejs")

module.exports  = db.define('admins', {
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
    password : Sequelize.STRING,
    fullname : Sequelize.STRING,
    username : {
        type: Sequelize.STRING,
        unique: {
            args: true,
            message: 'Username must be unique.',
            fields: [Sequelize.fn('lower', Sequelize.col('username'))]
        },
        validate: {
            min: {
                args: 3,
                msg: 'Username must start with a letter, have no spaces, and be at least 3 characters.'
            },
            max: {
                args: 40,
                msg: 'Username must start with a letter, have no spaces, and be at less than 40 characters.'
            },
            is: {
                args: /^[A-Za-z][A-Za-z0-9-]+$/i, // must start with letter and only have letters, numbers, dashes
                msg: 'Username must start with a letter, have no spaces, and be 3 - 40 characters.'
            }
        },
    },
    address : Sequelize.STRING,
    role : Sequelize.STRING,
    standing : Sequelize.ENUM(''),
},{
    timestamps : false,
    indexes: [{unique: true,fields: ['email']}],
    hooks : {
        beforeCreate : (admin, option) => new Promise((resolve, reject) => {
            bcrypt.hash(admin.password,null,null,(err,hash) => {
                if(err) return reject(err)
                admin.password = hash;
                resolve(admin)
            })
        })
    }     
})