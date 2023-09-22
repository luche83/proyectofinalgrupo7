const { validationResult } = require("express-validator");
const { readJSON } = require("../../data");

module.exports = (req, res) => {
  
    const characters = readJSON("characters.json");
    const regiones = readJSON("regiones.json");
    const categories = readJSON("categories.json");

    return res.render("productAdd", {
      characters,
      regiones,
      categories,
    }); 
};
