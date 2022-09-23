'use strict'

var mongoose = require('mongoose');
const dbUri = process.env.dbUri || "mongodb://127.0.0.1/mytestdb";

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbUri, mongooseOptions, function(err){

    if (err){
        console.log('error in db connection');
        process.exit(1);
    }else{
        console.log('database is connected ........');
    }
})

//exports.mongoose = mongoose;
module.exports = mongoose;