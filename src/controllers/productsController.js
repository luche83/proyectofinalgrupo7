
module.exports = {
      
   detail : require('./products/detail'),
   add : require('./products/add'),
   create : require('./products/create'),

    cart : (req, res) => {
        return res.render('productCart')
     }
     
}