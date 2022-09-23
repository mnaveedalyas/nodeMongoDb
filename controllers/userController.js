'use strict'

var models = require('../models');

const getUsers = (req, res) => {
    models.Users.find( {}, {}, {}, (err, data) =>{
        if (err) throw err;
        res.send({result: 200, data: data})
    });
}

const createUser = (req, res) => {
    let data = req.body;
    new models.Users(data).save((err, data) => {
        if (err) throw err;
        res.send({result: 200, data: data})
    })
}

module.exports = {
    getUsers, createUser
}