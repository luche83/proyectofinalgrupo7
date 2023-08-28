const { readJSON, writeJSON } = require('../../data');
const products = readJSON('products.json');

<<<<<<< HEAD
module.exports = (req, res) => {
    return res.render('productCart', {
        products,
        
=======
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    return res.render('productCart', {
        products,
        toThousand
>>>>>>> develop
    } 
    )
}