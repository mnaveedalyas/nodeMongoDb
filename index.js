const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/dbConnect')

const router = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());

app.listen({port: 3100}, () => {
    console.log('Listening at http://localhost:3100/ ')
})


app.use('/api/users', router);

app.get('/', (req, res) => {
    res.send("<h1>App is running </h1>");
})

