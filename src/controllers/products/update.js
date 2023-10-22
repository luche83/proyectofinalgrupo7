const { unlinkSync, existsSync } = require("fs");
const { validationResult } = require("express-validator");
const db = require('../../database/models');


module.exports = (req, res) => {

    const errors = validationResult(req)
    

    if(errors.isEmpty()) {
        
        const {title, price, categoryId, discount, amount, amountmin, description, sectionId, regionId} = req.body;

        db.Product.findByPk(req.params.id, {
            include : ['images']
        })

        .then(product => {

            db.Product.update(
                {
                    title : title.trim(),
                    price,
                    discount,
                    description : description.trim(),
                    amount,
                    amountmin,
                    categoryId,
                    sectionId,
                    regionId
                },
                {
                    where :  {
                        id : req.params.id
                    }
                }
            )
    
            ,then(() => {
               
                    if(req.files.image){

                    existsSync(`./src/public/images/productos/${product.images.find(image => image.main).file}`)&&
                    unlinkSync(`./src/public/images/productos/${product.images.find(image => image.main).file}`);

                    db.Image.destroy({
                        where : {
                            productId : req.params.id,
                            main : true
                        }
                    })
                    .then(() => {
                        db.Image.create({
                            file : req.files.image[0].filename,
                            main : true,
                            productId : req.params.id
                        })
                    })
                }

                if(req.files.images) {
                    product.images.filter(image => !image.main).forEach((image) => {
                        existsSync(`./src/public/images/productos/${image.file}`)&&
                        unlinkSync(`./src/public/images/productos/${image.file}`);
                        
                    });

                    db.Image.destroy({
                        where : {
                            productId : req.params.id,
                            main : false
                        }
                    })
                      .then(() => {
                        const images = req.files.images.map(({filename}) => {
                            return {
                                file: filename,
                                main : false,
                                productId : product.id
                            }
                           })

                           db.Image.bulkCreate(images,{
                            validate : true
                           }).then(result => {
                            return res.redirect('/admin')
                           })
                      })  
                }
            
                
                
            })
            .catch(error => console.log(error))
            .finally(() => {
                return res.redirect('/admin')
            })
        })
        	
    }else {

        const id = req.params.id;

    const product = db.Product.findByPk(id, {
        include : {
            all : true
        }
    });

    const categories = db.Category.findAll({
        order : ['title']
    });
    
    const regions = db.Region.findAll({
        order : ['title']
    });

    const sections = db.Section.findAll({
        order : ['title']
    });

    Promise.all([product, categories, regions,sections])
    .then(([product,categories,regions,sections]) => {
       
        return res.render('productEdit', {
            
            categories,
            regions,
            sections,
            ...product?.dataValues,
            errors : errors.mapped(),     
        })
    })

    .catch(error => console.log(error))               

           
    }
 
 }