const { readJSON, writeJSON } = require('../../data');
const products = readJSON('products.json');

module.exports = (req, res) => {
    return res.render('productCart', {
        products,
        
    } 
    )
}