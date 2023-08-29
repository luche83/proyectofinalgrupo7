const { unlinkSync, existsSync } = require("fs");
const {readJSON, writeJSON} = require("../../data");

module.exports = (req, res) => {
    
            
    const registers = readJSON('registers.json');

    const registersModify = registers.map(register => {
        
        if(register.id === req.params.id){

            existsSync(`./src/public/images/usuarios/${register.image}`)&&
            unlinkSync(`./src/public/images/usuarios/${register.image}`);

            register.firstname = req.body.firstname;
            register.lastname = req.body.lastname;
            register.email = req.body.email;
            register.category = req.body.category;
            register.password = req.body.password;
            register.image = req.file ? req.file.filename : register.image;
            
        }

        return register
    })


    writeJSON(registersModify, 'registers.json')
     
    return res.redirect('/admin')
}