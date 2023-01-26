'use strict'

var models = require('../models');



    const getCustomers = (req, res) => {
        models.Customers.find( {}, {}, {}, (err, data) =>{
            if (err) throw err;
            res.send({result: 200, data: data})
        });
    }

    const createCustomer = (req, res) => {
        let data = req.body;
        new models.Customers(data).save((err, data) => {
            if (err) throw err;
            res.send({result: 200, data: data})
        })
    }

    const getSites = (req, res) => {
        models.Sites.find( {}, {}, {}, (err, data) =>{
            if (err) throw err;
            res.send({result: 200, data: data})
        });
    }

    const createSite = (req, res) => {
        let data = req.body;
        new models.Sites(data).save((err, data) => {
            if (err) throw err;
            res.send({result: 200, data: data})
        })
    }

    const getContacts = (req, res) => {
        models.Contacts.find( {}, {}, {}, (err, data) =>{
            if (err) throw err;
            res.send({result: 200, data: data})
        });
    }

    const createContact = (req, res) => {
        let data = req.body;
        new models.Contacts(data).save((err, data) => {
            if (err) throw err;
            res.send({result: 200, data: data})
        })
    }


module.exports = {
    getCustomers, createCustomer,
    getSites, createSite,
    getContacts, createContact
};
