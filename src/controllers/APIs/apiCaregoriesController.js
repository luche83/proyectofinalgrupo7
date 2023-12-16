const createError = require('http-errors')
const paginate = require('express-paginate');
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require("../../service/categories.services");
const { validationResult } = require('express-validator');

module.exports = {
    listCategories : async (req, res) => {
        try {
            
            const {total, categories} = await getAllCategories(req.query.limit, req.skip);
            
            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(pagesCount, pagesCount, currentPage); 

            return res.status(200).json({
                ok : true,
                data : categories.map(category => {
                    return {
                        ...category.dataValues,
                        image : `${req.protocol}://${req.get('host')}/images/productos/${category.image}`,
                        url : `${req.protocol}://${req.get('host')}/api/categories/${category.id}`
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
                error : message || 'ERROR en List Categories'
            })
        }
    },

    showCategory : async (req, res) => {
        try {
            
            const category = await getCategoryById(req.params.id)

            return res.status(200).json({
                ok : true,
                data : {
                    ...category.dataValues,
                    image : `${req.protocol}://${req.get('host')}/images/productos/${category.image}`,
                    url : `${req.protocol}://${req.get('host')}/api/categories/${category.id}`
                }
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : message || 'ERROR en List Category'
            })
        }
    },

    createCategory : async (req,res) => {
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

        const {id} = await createCategory(data);

        const category = await getCategoryById(id)

            return res.status(200).json({
                ok : true,
                data : {
                 ...category.dataValues,
                image : `${req.protocol}://${req.get('host')}/images/categorias/${category.image}`,
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

    updateCategory : async (req,res) => {

        try {
            
           const categoryUpdated = await updateCategory(req.params.id, req.body);

           return res.status(200).json({
            ok : true,
            message : 'Categoria Actualizada con exito',
            data : categoryUpdated
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

    deleteCategory : async (req,res) => {

        try {

            await deleteCategory(req.params.id); 

            return res.status(200).json({
                ok : true,
                message : 'Categoria eliminada con exito',               
            })
            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : error.message || 'upss, Error'
            })
        }
    }
}