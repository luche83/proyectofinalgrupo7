const { unlinkSync, existsSync } = require("fs");
const {readJSON, writeJSON} = require("../../data");

module.exports = (req, res) => {
    
            
    const users = readJSON('users.json');

    const usersModify = users.map(user => {
        
        if(user.id === req.params.id){

            existsSync(`./src/public/images/usuarios/${user.image}`)&&
            unlinkSync(`./src/public/images/usuarios/${user.image}`);

            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.email = req.body.email;
            user.category = req.body.category;
            user.password = req.body.password;
            user.image = req.file ? req.file.filename : user.image;
            
        }

        return user
    })


    writeJSON(usersModify, 'users.json')
     
    return res.redirect('/admin')
}