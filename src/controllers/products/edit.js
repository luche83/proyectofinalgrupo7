const db = require('../../database/models');


module.exports = (req, res) => {

        const id = req.params.id;

    const product = db.Product.findByPk(id);

    const categories = db.Category.findAll({
        order : ['title']
    });
    
    const regions = db.Region.findAll({
        order : ['title']
    });

    const sections = db.Section.findAll({
        order : ['title']
    });

    Promise.all([product, categories, regions,sections])
    .then(([product,categories,regions,sections]) => {
       
        return res.render('productEdit', {
            
            categories,
            regions,
            sections,
            ...product?.dataValues      
        })
    })

    .catch(error => console.log(error))

    
 }