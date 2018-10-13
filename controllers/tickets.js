 
        const joi = require('joi');
        const Tickets = require('../models/tickets')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                   title : joi.string().required(),
                   description : joi.strict().required(),
                   urgency : joi.string().required() 
                })
            }

            static create(req, res, next){
                Tickets.create(req.body)
                .then(tickets => res.json(tickets), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                   title : joi.string(),
                   description : joi.strict(),
                   urgency : joi.string()
                })
            }

            static update(req, res, next){
                Tickets.update(req.body,{
                    where : {id : req.params.ticket}
                })
                .then(([ticket]) => res.json(Boolean(ticket).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Tickets.destroy({
                    where : {
                        id : req.params.ticket
                    }
                })
                .then(ticket => res.json(Boolean(ticket).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Tickets.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(ticket => res.json(ticket), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Tickets.findById(req.params.ticket)
                .then(ticket => res.json(ticket), next)
                .catch(next)
            }
        }
    