const { unlinkSync, existsSync } = require("fs");
const {readJSON, writeJSON} = require("../../data");
const {hashSync} = require('bcryptjs');
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
    
    const errors = validationResult(req)    
    const users = readJSON('users.json');

    if(errors.isEmpty()) {

        const users = readJSON('users.json');

        const usersModify = users.map(user => {
        
            if(user.id === req.session.userLogin.id){
    
                req.file &&
                existsSync(`./src/public/images/usuarios/${user.image}`)&&
                unlinkSync(`./src/public/images/usuarios/${user.image}`);
    
                user.name = req.body.name;
                user.surname = req.body.surname;
                user.email = req.body.email;
                user.role = 'user';
                user.password = hashSync(req.body.password, 10);
                user.birthday = req.body.birthday,
                user.address = req.body.address,
                user.city = req.body.city,
                user.province = req.body.province,
                
                user.image = req.file ? req.file.filename : user.image;
                
            }
            return user
            
        })
    
        
        writeJSON(usersModify, 'users.json')
         
        return res.redirect('/profile')
    }else {

       const user = users.find(user => user.id === req.params.id)

        return res.render('profileEdit', {
            errors : errors.mapped(),
            old : req.body,
            ...user
        })

    }

}