const { readJSON, writeJSON } = require('../../data');
/*const products = readJSON('products.json')*/
const { unlinkSync, existsSync } = require("fs");

module.exports = (req,res) => {    
    
    /*const productsModify = products.filter(product => product.id !== req.params.id);*/
      
    const registers = readJSON('registers.json')
    const registersDelete = registers.filter((register) => {
        if (register.id === req.params.id) { 

            existsSync(`./src/public/images/usuarios/${register.image}`)&&
            unlinkSync(`./src/public/images/usuarios/${register.image}`);

        }
        return register.id !== req.params.id
    })

    writeJSON(registersDelete, 'registers.json')

    return res.redirect('/admin')
}