const db = require('../../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {

    const productDetail = db.Product.findByPk(req.params.id, {
        include : ['images'],
    })

    const productsRelated = db.Product.findAll({
        include : ['images'],        
    })

    Promise.all([productDetail,productsRelated])

    .then(([productDetail, productsRelated]) => {

        return res.render('productDetail', {
            ...productDetail.dataValues,
            productsRelated,
            toThousand
        })

    })
    .then( () => {
        
    })
    .catch(error => console.log(error))    
 }