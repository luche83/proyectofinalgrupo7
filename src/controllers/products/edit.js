const { readJSON, writeJSON } = require('../../data');


module.exports = (req, res) => {

    const products = readJSON('products.json');
    const Categories = readJSON('categories.json');
    const regiones = readJSON('regiones.json');
    const characters = readJSON('characters.json');


    const product = products.find(product => product.id === req.params.id);

    return res.render('productEdit', {
        ...product,
        Categories,
        regiones,
        characters      
    })
 }