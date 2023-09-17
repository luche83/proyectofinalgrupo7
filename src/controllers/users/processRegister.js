const { v4: uuidv4 } = require('uuid');
const { readJSON, writeJSON } = require('../../data');
const User = require("../../data/User");
const { validationResult } = require('express-validator');

module.exports = (req, res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()) {

        const users = readJSON('users.json');
        const user = new User(req.body);
    
       users.push(user);
        writeJSON(users,'users.json')
        /*const usersModify = users.map(user => {

            if(user.id === req.params.id){
    
                req.file &&
                existsSync(`./src/public/images/usuarios/${user.image}`)&&
                unlinkSync(`./src/public/images/usuarios/${user.image}`);
    
                user.name = req.body.name;
                user.surname = req.body.surname;
                user.birthday = req.body.birthday;
                user.address = req.body.address;
                user.city = req.body.city;
                user.province = req.body.province;
                
                user.image = req.file ? req.file.filename : user.image;
            } 
    
            return user
        })
      
            writeJSON(usersModify, 'users.json')*/
        

       return res.redirect('/')

    }else {

        
        return res.render('register',{
            errors : errors.mapped(),
            old : req.body
        })
    } 
}


