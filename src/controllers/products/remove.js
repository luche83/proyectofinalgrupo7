const { readJSON, writeJSON } = require('../../data');
const products = readJSON('products.json')
const { unlinkSync, existsSync } = require("fs");

module.exports = (req,res) => {   

    const productModify = products.filter((product) => {

        if (product.id === +req.params.id ) {
            existsSync(`../../public/images/productos/${product.image}`) &&               
            unlinkSync(`../../public/images/productos/${product.image}`)           
        }
        return product.id !== req.params.id
    })

    writeJSON(productModify, 'products.json')

    return res.redirect('/admin')
}