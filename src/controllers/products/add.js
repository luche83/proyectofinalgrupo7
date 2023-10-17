const { validationResult } = require('express-validator');
const db = require('../../database/models')

module.exports = (req, res) => {

    const categories = db.Category.findAll({
      order : ['title']
    });

    const sections = db.Section.findAll({
      order : ['title']
    });
    const regions = db.Region.findAll({
      order : ['title']
    });
    
    Promise.all([categories,sections,regions])
      .then(([categories,sections,regions]) => {

        return res.render("productAdd", {
          categories,
          sections,
          regions
       }); 

      })
      .catch(error => console.log(error))
  
};
