var express = require('express');
var router = express.Router();

var controllers = require("../controllers");

router.get('/', (req, res) => {
    //res.send("<h1>User -> get is running </h1>");
    controllers.customerController.getCustomers(req, res);
})

router.post('/', (req, res) => {
    //res.send('<h1> user Data is posted </h1>');
    controllers.customerController.createCustomer(req, res)
})

module.exports = router;