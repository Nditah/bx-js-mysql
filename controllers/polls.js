 
        const joi = require('joi');
        const Polls = require('../models/polls')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                    name : joi.string().required(),
                    title : joi.string().required(),
                    description : joi.string().required(),
                    kind : joi.string().valid('coin','others').required()
                })
            }

            static create(req, res, next){
                Polls.create(req.body)
                .then(polls => res.json(polls), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                    name : joi.string(),
                    title : joi.string(),
                    description : joi.string(),
                    kind : joi.string().valid('coin','others')
                })
            }

            static update(req, res, next){
                Polls.update(req.body,{
                    where : {id : req.params.poll}
                })
                .then(([poll]) => res.json(Boolean(poll).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Polls.destroy({
                    where : {
                        id : req.params.poll
                    }
                })
                .then(poll => res.json(Boolean(poll).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Polls.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(poll => res.json(poll), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Polls.findById(req.params.poll)
                .then(poll => res.json(poll), next)
                .catch(next)
            }
        }
    