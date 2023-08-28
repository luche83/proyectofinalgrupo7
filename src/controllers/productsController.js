module.exports = {
   index : require('./products'),
   detail : require('./products/detail'),
   add : require('./products/add'),
   create : require('./products/create'),
   remove : require('./products/remove'),
   edit : require('./products/edit'),
   cart : (req, res) => {
      return res.render('productCart')
   }
     
}