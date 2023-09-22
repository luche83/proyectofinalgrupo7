const {check,body} = require('express-validator')

module.exports = [
    check("title")
    .notEmpty()
    .withMessage("Es obligatorio")
    .bail()
    .isLength({
      min: 4,
      max: 50,
    })
    .withMessage("Debe tener entre 4 y 20 caracteres"),
  check("category")
    .notEmpty()
    .withMessage("Es necesario"),
  check("region")
    .notEmpty()
    .withMessage("Es necesario"),
  check("character")
    .notEmpty()
    .withMessage("Es necesario"),
  check("section")
    .notEmpty()
    .withMessage("Es necesario"),
  check("cant")
    .notEmpty()
    .withMessage("Especificar"),
  check("cantMin")
    .notEmpty()
    .withMessage("Especificar"),  
  check("price")
    .notEmpty()
    .withMessage("Es obligatorio")
    .isInt({
      gt: 1,
    })
    .withMessage("Debe ser positivo"),
  check("description").isLength({
    min: 20,
    max: 800,
  }).withMessage('Debe tener entre 20 y 800 caracteres'),
  body('image')
    .custom((value,{req}) => {
      if(req.files.image){
        return true
      }
      return false
    }).withMessage('Debes subir una imagen principal')
]