const {readJSON} = require("../data")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req, res) => {
        const products = readJSON('products.json');
        return res.render('index',{
            productsInsale : products.filter(product => product.category === "in-sale"),
            products : products.filter(product => product.category === ""),
            toThousand
        })
    },

    admin : (req,res) => {

        const products = readJSON('products.json');
        const characters = readJSON('characters.json');
        const regiones = readJSON('regiones.json');
        return res.render('admin', {
            products,
            characters,
            regiones
        })
    }
}