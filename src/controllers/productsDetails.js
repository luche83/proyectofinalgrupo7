module.exports = {
    details : (req, res) => {
       return res.render('productDetail')
    },
    cart : (req, res) => {
        return res.render('productCart')
     }    
}