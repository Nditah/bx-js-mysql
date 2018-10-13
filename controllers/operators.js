
const joi = require('joi');
const Operator = require('../models/operators')
const Login = require('./login')

module.exports =  class  extends Login(Operator){
    
    static get createSchema(){
        return joi.object().keys( {
            email : joi.string().email().required(),
            password : joi.string().min(6).max(32).required(),
            domain : joi.string().required(),
            subDomain : joi.string().required(),
            description : joi.string().required(),
            domainName : joi.string().required(),
            businessName : joi.string().required(),
            businessAddress : joi.string().required(),
            businessEmail : joi.string().required(),
            businessOwner_name : joi.string().required(),
            businessOwner_email : joi.string().required(),
            businessOwner_fullname : joi.string().required(),
            //fullname : joi.string().required(),
            //address : joi.string().required(),
            //role : joi.string().required(),
            //standing : joi.string().valid(['']).required(),
        })
    }

    static create(req, res, next){
        Operator.create(req.body)
        .then(operator => res.json(operator), next)
        .catch(next)
    }

    static get updateSchema(){
        return joi.object().keys({
            email : joi.string().email(),
            domain : joi.string(),
            subDomain : joi.string(),
            description : joi.string(),
            domainName : joi.string(),
            businessName : joi.string(),
            businessAddress : joi.string(),
            businessEmail : joi.string(),
            businessOwner_name : joi.string(),
            businessOwner_email : joi.string(),
            businessOwner_fullname : joi.string(),
            //fullname : joi.string(),
            //address : joi.string(),
            //role : joi.string(),
        })
    }

    static update(req, res, next){
        Operator.update(req.body,{
            where : {id : req.params.operator}
        })
        .then(([operator]) => res.json(Boolean(operator).valueOf()), next)
        .catch(next)
    }

    static delete(req, res, next){
        Operator.destroy({
            where : {
                id : req.params.operator
            }
        })
        .then(operator => res.json(Boolean(operator).valueOf()), next)
        .catch(next)
    }

    static get(req, res, next){
        Operator.findAll({
            limit : req.query.limit,
            offset : req.query.offset,
            order : [['created_at','ASC']],
        })
        .then(operator => res.json(operator), next)
        .catch(next)
    }

    static getOne(req, res, next){
        Operator.findById(req.params.operator)
        .then(operator => res.json(operator), next)
        .catch(next)
    }
}