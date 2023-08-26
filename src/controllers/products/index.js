const { readJSON, writeJSON } = require('../../data');
const products = readJSON('products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    return res.render('indexProducts', {
        products,
        toThousand
    } 
    )
}