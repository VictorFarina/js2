const express = require('express');
const app = express();
const cors = require('cors');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/users', userController);
app.use('/api/products', productController);


module.exports = app;