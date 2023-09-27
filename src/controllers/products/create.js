const { v4: uuidv4 } = require('uuid');
const Product = require('../../data/Product');
const { unlinkSync, existsSync } = require("fs");
const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {

    const products = readJSON('products.json');

    /*const newProduct = new Product(req.body);*/

    products.push({

        /*id : products.length ? products[products.lenth -1 ].id +1 : 1,*/
        id : uuidv4(),
        title : req.body.title,
        category : req.body.category,
        character : req.body.character,
        region : req.body.region,
        price : req.body.price,
        discount : req.body.discount,
        description : req.body.description,
        cant : req.body.cant,
        cantMin : req.body.cantMin,
        image: req.file ? req.file.filename : null,
    });

    writeJSON(products, 'products.json');

    return res.redirect('/admin')
}