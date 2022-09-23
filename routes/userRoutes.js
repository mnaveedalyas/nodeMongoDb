var express = require('express');
var router = express.Router();

var controllers = require("../controllers");

router.get('/', (req, res) => {
    //res.send("<h1>User -> get is running </h1>");
    controllers.userController.getUsers(req, res);
})

router.post('/create', (req, res) => {
    //res.send('<h1> user Data is posted </h1>');
    controllers.userController.createUser(req, res)
})

module.exports = router;