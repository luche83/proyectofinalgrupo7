const db = require('../../database/models');
const createError = require('http-errors')
const paginate = require('express-paginate');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../../service/products.services');
const { validationResult } = require('express-validator');


module.exports = {
    listProducts : async (req, res) => {
        try {
            
            const {total, products} = await getAllProducts(req.query.limit, req.skip);

            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(pagesCount, pagesCount, currentPage); 

            return res.status(200).json({
                ok : true,
                
                data : products.map(product => {
                    return {
                        ...product.dataValues,
                       // file : `${req.protocol}://${req.get('host')}/images/products/${image.file}`,
                        url : `${req.protocol}://${req.get('host')}/api/products/${product.id}`
                    }
                }),
                meta : {
                    total,
                    pagesCount,
                    currentPage,
                    pages
                },
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : message || 'ERROR en List Product'
            })
        }
    },

    showProduct : async (req, res) => {
        try {
            
            const product = await getProductById(req.params.id)

            return res.status(200).json({
                ok : true,
                data : {
                    ...product.dataValues,
                    //    file : `${req.protocol}://${req.get('host')}/images/products/${product.file}`,
                }
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : message || 'ERROR en List Product'
            })
        }
    },

    createProduct : async (req,res) => {
        try {

        const errors = validationResult(req);

            if(!errors.isEmpty()){

                let errorsMessages = {}

                let objetErrors = errors.mapped()

                for (const key in objetErrors) {
                    
                    errorsMessages = {
                        ...errorsMessages,
                        [objetErrors[key]['path']]:objetErrors[key]['msg']
                    }
                }

                    let error = new Error()
                    error.status = 400
                    error.message = errorsMessages

                    throw error
            }

            const data = {
                ...req.body,
                image : req.file ? req.file.filename : null
            }

        const {id} = await createProduct(data);

        const product = await getProductById(id)

            return res.status(200).json({
                ok : true,
                data : {
                 ...product.dataValues,
                //image : `${req.protocol}://${req.get('host')}/images/products/${product.image}`,
                }
               
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : error.message || 'Upss, hubo un error, Sorry.'
            })
        }
    },

    updateProduct : async (req,res) => {

        try {
            
           const productUpdated = await updateProduct(req.params.id, req.body);

           return res.status(200).json({
            ok : true,
            message : 'Producto Actualizada con exito',
            data : productUpdated
        })
            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : error.message || 'upss, Error'
            })
        }

    },

    deleteProduct : async (req,res) => {

        try {

            await deleteProduct(req.params.id); 

            return res.status(200).json({
                ok : true,
                message : 'Producto eliminada con exito',               
            })
            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : error.message || 'upss, Error'
            })
        }
    },

    totalProductInDB : async (req, res) => {
        try {
        const total = await db.Product.count();
    
        return res.status(200).json({
            ok: true,
            data: total,
        });
        } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error",
        });
        }
    }
    
}

