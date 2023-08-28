const { readJSON, writeJSON } = require('../../data');


module.exports = (req, res) => {

    const products = readJSON('products.json');
    /* const categories = readJSON('categories.json');
    const regiones = readJSON('regiones.json');
    const characters = readJSON('characters.json'); */

    const {title, price, discount, description, category, character, region, cant, cantMin} = req.body;
    
    const productsModify = products.map(product => {

        if (product.id === req.params.id){

            product.title = title.trim(),
            product.category = category.trim(),
            product.character = character,
            product.region = region,
            product.price = +price,
            product.discount = +discount,
            product.description = description.trim(),
            product.cant = cant,
            product.cantMin = cantMin
            
        }

        return product
    })

   
		writeJSON(productsModify, 'products.json')

		return res.redirect("/admin")
 }