const { readJSON, writeJSON } = require('../../data');
/*const products = readJSON('products.json')*/
const { unlinkSync, existsSync } = require("fs");

module.exports = (req,res) => {    
    
    /*const productsModify = products.filter(product => product.id !== req.params.id);*/
      
    const users = readJSON('users.json')
    const usersDelete = users.filter((user) => {
        if (user.id === req.params.id) { 

            existsSync(`./src/public/images/usuarios/${user.image}`)&&
            unlinkSync(`./src/public/images/usuarios/${user.image}`);

        }
        return user.id !== req.params.id
    })

    writeJSON(usersDelete, 'users.json')

    return res.redirect('/admin')
}