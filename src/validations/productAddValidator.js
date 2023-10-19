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
  check("categoryId")
    .notEmpty()
    .withMessage("Es necesario"),
    check("sectionId")
    .notEmpty()
    .withMessage("Es necesario"),
  check("regionId")
    .notEmpty()
    .withMessage("Es necesario"),
    check("amount")
    .notEmpty()
    .withMessage("Especificar"),
  check("amountmin")
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