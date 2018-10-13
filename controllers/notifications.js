 
        const joi = require('joi');
        const Notifications = require('../models/notifications')


        module.exports =  class {
            
            static get createSchema(){
                return joi.object().keys( {
                    userId : joi.number().positive().integer().required(),
                    message : joi.string().required(),
                })
            }

            static create(req, res, next){
                Notifications.create(req.body)
                .then(notifications => res.json(notifications), next)
                .catch(next)
            }

            static get updateSchema(){
                return joi.object().keys({
                    message : joi.string()
                })
            }

            static update(req, res, next){
                Notifications.update(req.body,{
                    where : {id : req.params.notification}
                })
                .then(([notification]) => res.json(Boolean(notification).valueOf()), next)
                .catch(next)
            }

            static delete(req, res, next){
                Notifications.destroy({
                    where : {
                        id : req.params.notification
                    }
                })
                .then(notification => res.json(Boolean(notification).valueOf()), next)
                .catch(next)
            }

            static get(req, res, next){
                Notifications.findAll({
                    limit : req.query.limit,
                    offset : req.query.offset,
                    order : [['created_at','ASC']],
                })
                .then(notification => res.json(notification), next)
                .catch(next)
            }

            static getOne(req, res, next){
                Notifications.findById(req.params.notification)
                .then(notification => res.json(notification), next)
                .catch(next)
            }
        }
    