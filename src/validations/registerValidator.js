const {check,body} = require('express-validator')
const db = require('../database/models')
module.exports = [
    check("name")
        .isLength({
            min: 2,
        }).withMessage("El nombre es requerido")
        .isAlpha("es-ES").withMessage("Solo letras"),

    check("surname")
        .isLength({
            min: 2,
        }).withMessage("El apellido es requerido")
        .isAlpha("es-ES").withMessage("Solo letras"),

    body('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('Formato invalido')
        .custom((value,{req}) => {

            return db.User.findOne({
                where : {
                    email : value
                }
            }).then(user => {
                if(user){
                    return Promise.reject()
                }
            }).catch((error) => {
                console.log(error);
                return Promise.reject('El email ya fue registrado')
            })
            
        }),

    check('password')
        .isLength({
            min: 6,
            max: 12,
        }).withMessage('min 6 caracteres'),
        
    body('password2')
        .custom((value,{req})=> {
            if(value !== req.body.password){
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden')        
];