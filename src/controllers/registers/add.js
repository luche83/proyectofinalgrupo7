const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const usuarios = readJSON('usuarios.json');
    
    return res.render('register',{
        usuarios
        
    })
   }