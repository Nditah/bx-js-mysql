 
        const joi = require('joi');
        const Mails = require('../models/mails')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                    subject: joi.string().required(),
                    recipient : joi.string().email().required(),
                    message : joi.string().required(),
                })
            }

            static create(req, res, next){
                Mails.create(req.body)
                .then(mails => res.json(mails), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                    subject: joi.string(),
                    message : joi.string()
                })
            }

            static update(req, res, next){
                Mails.update(req.body,{
                    where : {id : req.params.mail}
                })
                .then(([mail]) => res.json(Boolean(mail).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Mails.destroy({
                    where : {
                        id : req.params.mail
                    }
                })
                .then(mail => res.json(Boolean(mail).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Mails.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(mail => res.json(mail), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Mails.findById(req.params.mail)
                .then(mail => res.json(mail), next)
                .catch(next)
            }
        }
    