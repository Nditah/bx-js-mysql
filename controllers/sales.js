 
        const joi = require('joi');
        const Sales = require('../models/sales')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                    amount : joi.number().positive().precision(2).required()
                })
            }

            static create(req, res, next){
                Sales.create(req.body)
                .then(sales => res.json(sales), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                    amount : joi.number().positive().precision(2)
                })
            }

            static update(req, res, next){
                Sales.update(req.body,{
                    where : {id : req.params.sale}
                })
                .then(([sale]) => res.json(Boolean(sale).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Sales.destroy({
                    where : {
                        id : req.params.sale
                    }
                })
                .then(sale => res.json(Boolean(sale).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Sales.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(sale => res.json(sale), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Sales.findById(req.params.Sale)
                .then(sale => res.json(sale), next)
                .catch(next)
            }
        }
    