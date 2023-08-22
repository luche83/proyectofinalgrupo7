const { readJSON, writeJSON } = require('../../data');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {

    const products = readJSON('products.json');

    const product = products.find(product => product.id === req.params.id);

    return res.render('productDetail', {
        ...product,
        toThousand
    })
 }