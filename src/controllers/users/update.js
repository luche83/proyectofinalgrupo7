const { unlinkSync, existsSync } = require("fs");
const {readJSON, writeJSON} = require("../../data");
const { validationResult } = require("express-validator");


module.exports = (req, res) => {
    
    const errors = validationResult(req)         
    const users = readJSON('users.json');
    
    if(errors.isEmpty()) {
    
        const usersModify = users.map(user => {
            
        if(user.id === req.session.userLogin.id){
            req.file &&
            existsSync(`./src/public/images/usuarios/${user.image}`)&&
            unlinkSync(`./src/public/images/usuarios/${user.image}`);

            user.name = req.body.name;
            user.surname = req.body.surname;
            user.surname = req.body.surname;
            user.birthday = req.body.birthday;
            user.address = req.body.address;
            user.city = req.body.city;
            user.province = req.body.province;

            
            user.image = req.file ? req.file.filename : user.image;
            
        }

        return user
    })


    writeJSON(usersModify, 'users.json')
     
    return res.redirect('/')
}else {

    const user = users.find(user => user.id === req.params.id)

     return res.render('profileEdit', {
         errors : errors.mapped(),
         old : req.body,
         ...user
     })

 }
}