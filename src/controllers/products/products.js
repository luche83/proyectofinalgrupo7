const db = require('../../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    db.Product.findAll({
        include : ['images']
    })

    .then(products => {
        
        return res.render('indexProducts',{
            products,
            toThousand
        })
    })
    .catch(error => console.log(error))
}