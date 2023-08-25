const { readJSON, writeJSON } = require('../../data');
const categories = readJSON('categories.json');

module.exports = (req, res) => {
    return res.render('productEdit', {
        categories
    } 
    )
}