const { unlinkSync, existsSync } = require("fs");
const { validationResult } = require('express-validator');

const db = require('../../database/models');


module.exports = (req, res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()) {
        
        const {title, price, discount, description,amount, amountmin, categoryId, sectionId, regionId } = req.body;

        db.Product.create ({

            title : title.trim(),
            price,
            discount : discount || 0,
            amount,
            amountmin,
            categoryId,
            sectionId,
            regionId,
            description : description.trim()

        })
            .then(product => {
                if(req.files.image){

                   db.Image.create({
                        file : req.files.image[0].filename,
                        main : true,
                        productId : product.id
                }) 
                    .then(() => {
                        if(req.files.images){
                            const images = req.files.images.map(({filename}) => {
                                return {
                                    file: filename,
                                    main : false,
                                    productId : product.id
                                }
                            })

                            db.Image.bulkCreate(images, {
                                validate : true
                            }).then(result => {
                                return res.redirect('/admin')
                            })
                        }else{
                            return res.redirect('/admin') 
                        }
                        
                    })
                    
                }
                return res.redirect('/admin')
                
            })
            .catch(error => console.log(error))
    
    }else {

       (req.files.image && existsSync(`./src/public/images/productos/${req.files.image[0].filename}`))&& unlinkSync(`./src/public/images/productos/${req.files.image[0].filename }`);

        if(req.files.images) {
            req.files.images.forEach(file => {
                existsSync(`./src/public/images/productos/${file.filename}`) && unlinkSync(`./src/public/images/productos/${file.filename}`);
            });
        }

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
                regions,
                errors : errors.mapped(),
                old : req.body
             }); 
      
            })
            .catch(error => console.log(error))
        
    }

}