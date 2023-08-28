const {readJSON} = require("../data");
const products = require("./products");

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
        const categories = readJSON('categories.json');
        return res.render('admin', {
            products,
            characters,
            regiones,
            categories
        })
    },

	search: (req, res) => {
        const products = readJSON('products.json');
        const results = products.filter(product => product.title.toLowerCase().includes(req.query.keywords.toLowerCase()))
		return res.render('results', {
			results,
			toThousand,
			keywords : req.query.keywords
		})
	},
}