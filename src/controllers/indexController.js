const db = require("../database/models");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req, res) => {
        
        db.Product.findAll()

        .then(products => {
            
            return res.render('index',{
                productsInsale : products.filter(product => product.category === "Oferta"),
                productsMasVisitadas : products.filter(product => product.category === "Mas Visitadas"),
                productsNew : products.filter(product => product.category === "Nuevos"),
                products : products.filter(product => product.category === " "),
                toThousand
            })
        })
        .catch(error => console.log(error))
        
    },

    admin : (req,res) => {




        const products = db.Product.findAll();
        const categories = db.Product.findAll();
        const regions = db.Product.findAll();
        const sections = db.Product.findAll();
               
        const users = db.Product.findAll();

        Promise.all([products, categories, regions, sections, users])
        .then(([products, categories, regions, sections, users]) => {
           
            return res.render('admin', {
                products,
                categories,
                regions,
                sections,
                users
            })
        })
        .catch(error => console.log(error))
        
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