const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const characters = readJSON('characters.json');
    const regiones = readJSON('regiones.json');

    return res.render('productAdd',{
        characters,
        regiones
    })
   }