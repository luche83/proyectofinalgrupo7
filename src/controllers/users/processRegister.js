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
      
       return res.redirect('/users/login')

    }else {

        
        return res.render('register',{
            errors : errors.mapped(),
            old : req.body
        })
    } 
}


