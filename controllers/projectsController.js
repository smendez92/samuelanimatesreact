var mongoose = require('mongoose');
const db = require("../models");

module.exports = {
    findAll : function(req, res){
        //req doesn't need to contain anything
        db.Projects.find({})
        .catch(function(err){
            res.status(422).json(err)
        })
    }
};