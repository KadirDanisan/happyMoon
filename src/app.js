const express = require("express");
require("dotenv").config();
const category = require('./routers/category');
const product = require('./routers/products');
const ingredient = require('./routers/ingredients');
const app = express();

app.use(express.json());

app.use('/categories', category);
app.use('/products', product);
app.use('/ingredients', ingredient);

app.listen( process.env.PORT || 3000, ()=> {
    console.log("Server başarıyla kurulmuştur");
});