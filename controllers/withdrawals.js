 
        const joi = require('joi');
        const Withdrawals = require('../models/withdrawals')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                    amount : joi.number().precision(2).positive().required(),
                    userType : joi.string().valid('exchange','trader').required(),
                    userId : joi.number().positive().integer().required(),
                })
            }

            static create(req, res, next){
                Withdrawals.create(req.body)
                .then(withdrawals => res.json(withdrawals), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                    userType : joi.string().valid('exchange','trader').required(),
                })
            }

            static update(req, res, next){
                Withdrawals.update(req.body,{
                    where : {id : req.params.withdrawal}
                })
                .then(([withdrawal]) => res.json(Boolean(withdrawal).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Withdrawals.destroy({
                    where : {
                        id : req.params.withdrawal
                    }
                })
                .then(withdrawal => res.json(Boolean(withdrawal).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Withdrawals.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(withdrawal => res.json(withdrawal), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Withdrawals.findById(req.params.withdrawal)
                .then(withdrawal => res.json(withdrawal), next)
                .catch(next)
            }
        }
    