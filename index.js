require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/dbConnect')



const userRouter = require('./routes/userRoutes');
const customerRouter = require('./routes/customerRoutes');

const app = express();
app.use(bodyParser.json());

app.listen({port: 3000}, () => {
    console.log('Listening at http://localhost:3000/ ')
})


app.use('/api/users', userRouter);
app.use('/api/customers', customerRouter);

app.get('/', (req, res) => {
    res.send("<h1>App is running -------- </h1>");
})

console.log('DB_URL :', process.env.DB_URL);
console.log('DB_Name :', process.env.DB_Name);


