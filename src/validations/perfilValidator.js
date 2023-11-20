
const moment =require('moment')
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
check("address")
    .notEmpty()
    .withMessage("La direccion es obligatorio")
    .bail()
    .isLength({
         min: 2,
    }),
check("birthday")
    .notEmpty()
    .withMessage("Ingrese la fecha de nacimiento")
    .custom((value) => {
      const birthDate = moment(value);

      if(!birthDate.isValid()){
        throw new Error("La fecha no tiene un formato valido");
      }
      return true;
    })

    .custom((value) => {
      const birthDate = moment(value);
      const currentDate = moment();

      if (birthDate.isAfter(currentDate)) {
        throw new Error("La fecha debe ser anterior a la actual");
      }
      return true;
    })
     
    .custom((value) => {
      const birthDate = moment(value);
      const minDate = moment().subtract(120, 'years');

      if (birthDate.isBefore(minDate)) {
        throw new Error("Tan viejo/a sos??");
      }

      return true;
    }),

    check("city")
    .notEmpty()
    .withMessage("La ciudad es obligatorio")
    .bail()
    .isLength({
         min: 2,
    }),        
    check("province")
    .notEmpty()
    .withMessage("La provincia es obligatorio")
    .bail()
    .isLength({
         min: 2,
    }),        
            
];