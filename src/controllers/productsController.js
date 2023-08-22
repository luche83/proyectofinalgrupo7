
module.exports = {
   detail : require('./products/detail'),
   add : require('./products/add'),
   create : require('./products/create'),
   remove : require('./products/remove'),
   cart : (req, res) => {
      return res.render('productCart')
   }
     
}