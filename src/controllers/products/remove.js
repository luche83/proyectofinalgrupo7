const { readJSON, writeJSON } = require('../../data');
/*const products = readJSON('products.json')*/
const { unlinkSync, existsSync } = require("fs");

module.exports = (req,res) => {    
    
    /*const productsModify = products.filter(product => product.id !== req.params.id);*/
      
    const products = readJSON('products.json')
    console.log(req.params.id)
    const productsDelete = products.filter((product) => {
        if (product.id === req.params.id) { 

            existsSync(`./src/public/images/productos/${product.image}`)&&
            unlinkSync(`./src/public/images/productos/${product.image}`);

            /*product.name = req.body.name;
            product.image = req.file ? req.file.filename : product.image;*/
        }
        return product.id !== req.params.id
    })

    writeJSON(productsDelete, 'products.json')

    return res.redirect('/admin')
}