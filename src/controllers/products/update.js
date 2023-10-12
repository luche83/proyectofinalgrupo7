const { unlinkSync, existsSync } = require("fs");
const { readJSON, writeJSON } = require('../../data');
const { validationResult } = require("express-validator");


module.exports = (req, res) => {

    const errors = validationResult(req)
    const products = readJSON('products.json');

    if(errors.isEmpty()) {
        
        const products = readJSON('products.json');
    
    
    const productsModify = products.map(product => {

        if(product.id === req.params.id){

            req.file &&
            existsSync(`./src/public/images/productos/${product.image}`)&&
            unlinkSync(`./src/public/images/productos/${product.image}`);

            product.title = req.body.title;
            product.category = req.body.category;
            product.character = req.body.character;
            product.region = req.body.region;
            product.price = req.body.price;
            product.discount = req.body.discount;
            product.description = req.body.description;
            product.cant = req.body.cant;
            product.cantMin = req.body.cantMin;
            product.image = req.file ? req.file.filename : product.image;
        } 

        return product
    })
  
		writeJSON(productsModify, 'products.json')

		return res.redirect('/admin')
    }else {

        const characters = readJSON("characters.json");
        const regiones = readJSON("regiones.json");
        const categories = readJSON("categories.json");

        const product = products.find(product => product.id === req.params.id)

        return res.render('productEdit', {
            characters,
            regiones,
            categories,
            errors : errors.mapped(),
            old : req.body,
            ...product
        })
    
    }
 
 }