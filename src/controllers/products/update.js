const { readJSON, writeJSON } = require('../../data');


module.exports = (req, res) => {

    
    /* const categories = readJSON('categories.json');
    const regiones = readJSON('regiones.json');
    const characters = readJSON('characters.json'); */
    
    const products = readJSON('products.json');

    const productsModify = products.map(product => {
        if(product.id === req.params.id){

            product.title = req.body.title
            product.category = req.body.category
            product.character = req.body.character
            product.region = req.body.region
            product.price = req.body.price
            product.discount = req.body.discount
            product.description = req.body.description
            product.cant = req.body.cant
            product.cantMin = req.body.cantMin           
        }

        return product
    })
  
		writeJSON(productsModify, 'products.json')

		return res.redirect('/admin')
 }