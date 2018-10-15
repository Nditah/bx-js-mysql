 
        const joi = require('joi');
        const Buys = require('../models/buys')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                    amount : joi.number().positive().precision(2).required()
                })
            }

            static create(req, res, next){
                Buys.create(req.body)
                .then(buys => res.json(buys), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                    amount : joi.number().positive().precision(2)
                })
            }

            static update(req, res, next){
                Buys.update(req.body,{
                    where : {id : req.params.buy}
                })
                .then(([buy]) => res.json(Boolean(buy).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Buys.destroy({
                    where : {
                        id : req.params.buy
                    }
                })
                .then(buy => res.json(Boolean(buy).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Buys.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(buy => res.json(buy), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Buys.findById(req.params.Sale)
                .then(buy => res.json(buy), next)
                .catch(next)
            }
        }
    