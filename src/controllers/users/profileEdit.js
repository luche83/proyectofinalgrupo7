const db = require('../../database/models')

module.exports = (req,res) => {
  
   db.User.findByPk(req.session.userLogin.id)
      .then(user =>{

         const birthday = new Date(user.birthday).toISOString();
         
         return res.render('profileEdit',{
         ...user.dataValues,
        
      
       });
      })
      .catch(error => console.log(error))
   }