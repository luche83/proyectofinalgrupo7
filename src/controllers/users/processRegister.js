const { validationResult } = require('express-validator');
const {hashSync} = require('bcryptjs')
const db = require('../../database/models')



module.exports = (req, res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()) {

        const {name, surname, email, password} = req.body

        db.User.create({
            name : name.trim(),
            surname : surname.trim(),
            email : email.trim(),
            password : hashSync(password, 10),
            roleId : 2

        })
            .then(()=> {
                return res.redirect('/')
            })
                .catch(error => console.log(error))
    }else {
        
        return res.render('register',{
            errors : errors.mapped(),
            old : req.body
        })
    } 
}


