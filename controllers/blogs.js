
const joi = require('joi');
const Blogs = require('../models/blogs')


module.exports =  class {
    
    static get createSchema(){
        return joi.object().keys( {
            title : joi.string().required(),
            author : joi.number().integer().positive().required(),
            summary : joi.string().required(),
            body : joi.string().required(),
            images : joi.string().required(),
            url : joi.string().required(),
            keywords : joi.string().required(),
            placeholders : joi.string().required(),
            //standing : joi.string().valid(['']).required(),
        })
    }

    static create(req, res, next){
        Blogs.create(req.body)
        .then(blogs => res.json(blogs), next)
        .catch(next)
    }

    static get updateSchema(){
        return joi.object().keys({
            title : joi.string(),
            author : joi.number().integer().positive(),
            summary : joi.string(),
            body : joi.string(),
            images : joi.string(),
            url : joi.string(),
            keywords : joi.string(),
            placeholders : joi.string()
        })
    }

    static update(req, res, next){
        Blogs.update(req.body,{
            where : {id : req.params.blog}
        })
        .then(([blogs]) => res.json(Boolean(blogs).valueOf()), next)
        .catch(next)
    }

    static delete(req, res, next){
        Blogs.destroy({
            where : {
                id : req.params.blog
            }
        })
        .then(blogs => res.json(Boolean(blogs).valueOf()), next)
        .catch(next)
    }

    static get(req, res, next){
        Blogs.findAll({
            limit : req.query.limit,
            offset : req.query.offset,
            order : [['created_at','ASC']],
        })
        .then(blogs => res.json(blogs), next)
        .catch(next)
    }

    static getOne(req, res, next){
        Blogs.findById(req.params.blog)
        .then(blogs => res.json(blogs), next)
        .catch(next)
    }
}