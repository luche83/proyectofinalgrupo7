const {check,body} = require('express-validator')
const { readJSON } = require('../data')
module.exports = [
    check("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .bail()
        .isLength({
             min: 2,
        }),        
    check("surname")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .bail()
    .isLength({
         min: 2,
    }),        
      
    
    check("birthday")
    .notEmpty()
    .withMessage("La fecha es obligatorio")
    .bail(),
           
    check("address")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({
         min: 2,
    }),        
    check("city")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({
         min: 2,
    }),        
    check("province")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({
         min: 2,
    }),        
            
];