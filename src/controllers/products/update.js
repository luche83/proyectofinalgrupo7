const { unlinkSync, existsSync } = require("fs");
const { readJSON, writeJSON } = require('../../data');


module.exports = (req, res) => {

    const products = readJSON('products.json');
    
    
    const productsModify = products.map(product => {

        if(product.id === req.params.id){

            existsSync(`./src/public/images/productos/${product.image}`)&&
            unlinkSync(`./src/public/images/productos/${product.image}`);

            product.title = req.bodytitle;
            product.category = reg.body.category;
            product.character = reg.body.character;
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
 }