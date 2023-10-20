const db = require("../database/models");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req, res) => {
        
        db.Product.findAll({
            include : ['images']
        })

        .then(products => {
            
            return res.render('index',{
                /*productsInsale : products.filter(product => product.category.title === "Oferta"),
                productsMasVisitadas : products.filter(product => product.category.title === "Mas Visitadas"),
                productsNew : products.filter(product => product.category.title === "Nuevos"),
                products : products.filter(product => product.category.title === " "),
                toThousand*/
                products,
                toThousand
            })
        })
        .catch(error => console.log(error))
        
    },

    admin : (req,res) => {

        const products = db.Product.findAll({
            
            include : ['category','region','section','images']
        });
        const categories = db.Category.findAll();
        const regions = db.Region.findAll();
        const sections = db.Section.findAll();
        const users = db.User.findAll();

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