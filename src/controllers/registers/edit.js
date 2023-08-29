const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const registers = readJSON('registers.json')
    const id = req.params.id;

    const register = registers.find(register => register.id === id)
       
    return res.render('registerEdit', {
        ...register
    })
    
   }