const {check,body} = require('express-validator')

module.exports = [
    check("title")
    .notEmpty()
    .withMessage("Es obligatorio")
    .bail()
    .isLength({
      min: 5,
      max: 50,
    })
    .withMessage("Debe tener entre 5 y 50 caracteres"),
        
  
]