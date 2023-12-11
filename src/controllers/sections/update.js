const { unlinkSync, existsSync } = require("fs");
const db = require("../../database/models");
const { validationResult } = require("express-validator");
const { response } = require("express");


module.exports = (req, res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()) {
        
        const {title } = req.body
        
       

        db.Section.update(
            {
                title : title.trim(),
                            
            },
            {
                where : {
                    id : req.session.userLogin.id
                }
            }
        )
        .then(response => {
            req.session.userLogin.name = name;
            res.locals.userLogin.name = name;
            
            if(req.cookies.raicesArgentinas){
                res.cookie('raicesArgentinas',req.session.userLogin);
            }

            return res.redirect('/')
        })
    }else {
        db.section.findByPk(req.session.userLogin.id)
      .then(section =>{
         return res.render('sectionEdit',{
         ...section.dataValues,
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