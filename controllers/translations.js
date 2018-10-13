 
        const joi = require('joi');
        const Translations = require('../models/translations')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                  name : joi.string().required(),
                  english : joi.string().required(),
                  language1 : joi.string().required(),
                  language2 : joi.string().required(),
                  language3 : joi.string().required()  
                })
            }

            static create(req, res, next){
                Translations.create(req.body)
                .then(translations => res.json(translations), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                    name : joi.string(),
                    english : joi.string(),
                    language1 : joi.string(),
                    language2 : joi.string(),
                    language3 : joi.string()
                })
            }

            static update(req, res, next){
                Translations.update(req.body,{
                    where : {id : req.params.translation}
                })
                .then(([translation]) => res.json(Boolean(translation).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Translations.destroy({
                    where : {
                        id : req.params.translation
                    }
                })
                .then(translation => res.json(Boolean(translation).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Translations.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(translation => res.json(translation), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Translations.findById(req.params.translation)
                .then(translation => res.json(translation), next)
                .catch(next)
            }
        }
    