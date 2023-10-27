const db = require("../database/models");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req, res) => {
        
        
const nuevos = db.Product.findAll({
    include : ['images'],
    where : {
        categoryId : 1
    }

})

const ofertas = db.Product.findAll({
    include : ['images'],
    where : {
        categoryId : 2
    }

})

const visitados = db.Product.findAll({
    include : ['images'],
    where : {
        categoryId : 3
    }

})
      Promise.all([nuevos, ofertas, visitados])

      .then(([nuevos, ofertas, visitados]) => {

        return res.render('index',{nuevos, ofertas, visitados, toThousand}  )
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