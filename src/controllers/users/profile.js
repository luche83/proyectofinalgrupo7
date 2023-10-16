

const db = require('../../database/models')

module.exports = (req,res) => {
  
   db.User.findByPk(req.session.userLogin.id)
      .then(user =>{
         return res.render('profile',{
         ...user.dataValues
      
       });
      })
      .catch(error => console.log(error))
   }