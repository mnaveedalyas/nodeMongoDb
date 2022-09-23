var mongoose = require("mongoose");
var schema = mongoose.Schema;

var user = new schema({
    firstName: {type: String, trim:true, required: true},
    lastName: {type: String, trim: true, required: true},
    emailId: {type: String, trim: true, required: true},
    password: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, defauly: Date.now}
});

module.exports = mongoose.model("user", user);