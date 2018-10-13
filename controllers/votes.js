 
        const joi = require('joi');
        const Votes = require('../models/votes')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                   userType : joi.number().positive().integer().required(),
                   transaction_amount : joi.number().precision(2).positive().required(),
                   transaction_currency : joi.string().required(),
                   choice : joi.string().valid('yes','no').required(),
                   comment : joi.string().required() 
                })
            }

            static create(req, res, next){
                Votes.create(req.body)
                .then(votes => res.json(votes), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                   choice : joi.string().valid('yes','no'),
                   comment : joi.string()
                })
            }

            static update(req, res, next){
                Votes.update(req.body,{
                    where : {id : req.params.vote}
                })
                .then(([vote]) => res.json(Boolean(vote).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Votes.destroy({
                    where : {
                        id : req.params.vote
                    }
                })
                .then(vote => res.json(Boolean(vote).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Votes.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(vote => res.json(vote), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Votes.findById(req.params.vote)
                .then(vote => res.json(vote), next)
                .catch(next)
            }
        }
    