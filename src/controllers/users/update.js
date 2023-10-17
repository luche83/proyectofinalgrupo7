const { unlinkSync, existsSync } = require("fs");
const db = require("../../database/models");
const { validationResult } = require("express-validator");
const { response } = require("express");


module.exports = (req, res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()) {
        
        const {name, surname, address, birthday, city, province, image } = req.body
        
       

        db.User.update(
            {
                name : name.trim(),
                surname : surname.trim(),
                address : address.trim(),
                birthday : birthday,
                city : city.trim(),
                province : province.trim(),

               
            },
            {
                where : {
                    id : req.session.userLogin.id
                }
            }
        )
        .then(response => {
            console.log(response);
            req.session.userLogin.name = name;
            res.locals.userLogin.name = name;
            
            if(req.cookies.raicesArgentinas){
                res.cookie('raicesArgentinas',req.session.userLogin);
            }

            return res.redirect('/')
        })
    }else {
        db.User.findByPk(req.session.userLogin.id)
      .then(user =>{
         return res.render('profile',{
         ...user.dataValues,
         errors : errors.mapped()
      
       });
      })
      .catch(error => console.log(error))
   }
    }

    
/*
    req.file &&
            existsSync(`./src/public/images/usuarios/${user.image}`)&&
            unlinkSync(`./src/public/images/usuarios/${user.image}`);

            image = req.file ? req.file.filename : user.image*/