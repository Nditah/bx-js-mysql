 
        const joi = require('joi');
        const Settings = require('../models/settings')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                    value : joi.string().required(),
                    name : joi.string().required(),
                    description : joi.string().required()
                })
            }

            static create(req, res, next){
                Settings.create(req.body)
                .then(settings => res.json(settings), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                    value : joi.string(),
                    name : joi.string(),
                    description : joi.string()
                })
            }

            static update(req, res, next){
                Settings.update(req.body,{
                    where : {id : req.params.setting}
                })
                .then(([setting]) => res.json(Boolean(setting).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Settings.destroy({
                    where : {
                        id : req.params.setting
                    }
                })
                .then(setting => res.json(Boolean(setting).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Settings.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(setting => res.json(setting), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Settings.findById(req.params.setting)
                .then(setting => res.json(setting), next)
                .catch(next)
            }
        }
    