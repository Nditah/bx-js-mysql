
const joi = require('joi');
const Trader = require('../models/traders')
const Login = require('./login');

module.exports =  class extends Login(Trader){
    
    static get createSchema(){
        return joi.object().keys( {
            email : joi.string().email().required(),
            password : joi.string().min(6).max(32).required(),
            description : joi.string().required(),
            country : joi.string().required(),
            fullname : joi.string().required(),
            //standing : joi.string().valid(['']).required(),
        })
    }

    static create(req, res, next){
        Trader.create(req.body)
        .then(trader => res.json(trader), next)
        .catch(next)
    }

    static get updateSchema(){
        return joi.object().keys({
            email : joi.string().email(),
            description : joi.string(),
            country : joi.string(),
            fullname : joi.string()
        })
    }

    static update(req, res, next){
        Trader.update(req.body,{
            where : {id : req.params.trader}
        })
        .then(([trader]) => res.json(Boolean(trader).valueOf()), next)
        .catch(next)
    }

    static delete(req, res, next){
        Trader.destroy({
            where : {
                id : req.params.trader
            }
        })
        .then(trader => res.json(Boolean(trader).valueOf()), next)
        .catch(next)
    }

    static get(req, res, next){
        Trader.findAll({
            limit : req.query.limit,
            offset : req.query.offset,
            order : [['created_at','ASC']],
        })
        .then(trader => res.json(trader), next)
        .catch(next)
    }

    static getOne(req, res, next){
        Trader.findById(req.params.trader)
        .then(trader => res.json(trader), next)
        .catch(next)
    }
}