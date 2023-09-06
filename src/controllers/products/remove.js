const { readJSON, writeJSON } = require('../../data');
/*const products = readJSON('products.json')*/
const { unlinkSync, existsSync } = require("fs");

module.exports = (req,res) => {    
    
    /*const productsModify = products.filter(product => product.id !== req.params.id);*/
      
    const products = readJSON('products.json')
    const productsDelete = products.filter((product) => {
        if (product.id === req.params.id) { 

            existsSync(`./src/public/images/productos/${product.image}`)&&
            unlinkSync(`./src/public/images/productos/${product.image}`);

        }
        return product.id !== req.params.id
    })
    
    writeJSON(productsDelete, 'products.json') 

    return res.redirect('/admin')
}