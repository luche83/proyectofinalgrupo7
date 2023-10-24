const { check } = require("express-validator");

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
  check("price")
    .notEmpty()
    .withMessage("Es obligatorio")
    .isInt({
      gt: 1,
    })
    .withMessage("Debe ser positivo"),
  check("amount")
    .notEmpty()
    .withMessage("Especificar"),
  check("amountmin")
    .notEmpty()
    .withMessage("Especificar"),
  check("description")
    .isLength({
      min: 5,
      max: 800,
    })
    .withMessage("Debe tener entre 5 y 800 caracteres"),
];
