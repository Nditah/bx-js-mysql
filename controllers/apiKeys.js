
const joi = require('joi');
const ApiKeys = require('../models/apiKeys')


module.exports =  class {
    
    static get createSchema(){
        return joi.object().keys( {
            email : joi.string().email().required(),
            password : joi.string().min(6).max(32).required(),
            username : joi.string().required(),
            address : joi.string().required(),
            fullname : joi.string().required(),
            role : joi.string().required(),
            //standing : joi.string().valid(['']).required(),
        })
    }

    static create(req, res, next){
        ApiKeys.create(req.body)
        .then(apiKeys => res.json(apiKeys), next)
        .catch(next)
    }

    static get updateSchema(){
        return joi.object().keys({
            email : joi.string().email(),
            username : joi.string(),
            address : joi.string(),
            role : joi.string(),
            fullname : joi.string()
        })
    }

    static update(req, res, next){
        ApiKeys.update(req.body,{
            where : {id : req.params.apiKeys}
        })
        .then(([apiKeys]) => res.json(Boolean(apiKeys).valueOf()), next)
        .catch(next)
    }

    static delete(req, res, next){
        ApiKeys.destroy({
            where : {
                id : req.params.apiKeys
            }
        })
        .then(apiKeys => res.json(Boolean(apiKeys).valueOf()), next)
        .catch(next)
    }

    static get(req, res, next){
        ApiKeys.findAll({
            limit : req.query.limit,
            offset : req.query.offset,
            order : [['created_at','ASC']],
        })
        .then(apiKeys => res.json(apiKeys), next)
        .catch(next)
    }

    static getOne(req, res, next){
        ApiKeys.findById(req.params.apiKeys)
        .then(apiKeys => res.json(apiKeys), next)
        .catch(next)
    }
}