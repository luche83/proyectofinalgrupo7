const { readJSON, writeJSON } = require('../../data');
const products = readJSON('products.json')

module.exports = (req,res) => {    
    const productModify = products.filter(product => product.id !== req.params.id)
    
    writeJSON(productModify, 'products.json')

    return res.redirect('/admin')
}