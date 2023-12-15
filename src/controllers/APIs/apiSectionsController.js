const createError = require('http-errors')
const paginate = require('express-paginate');
const { getAllSections, getSectionById, createSection, updateSection, deleteSection } = require("../../service/sections.services");
const { validationResult } = require('express-validator');

module.exports = {
    listSections : async (req, res) => {
        try {
            
            const {total, sections} = await getAllSections(req.query.limit, req.skip);

            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(pagesCount, pagesCount, currentPage); 

            return res.status(200).json({
                ok : true,
                data : sections.map(section => {
                    return {
                        ...section.dataValues,
                        image : `${req.protocol}://${req.get('host')}/images/productos/${section.image}`,
                        url : `${req.protocol}://${req.get('host')}/api/sections/${section.id}`
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
                error : message || 'ERROR en List Sections'
            })
        }
    },

    showSection : async (req, res) => {
        try {
            
            const section = await getSectionById(req.params.id)

            return res.status(200).json({
                ok : true,
                data : {
                    ...section.dataValues,
                    image : `${req.protocol}://${req.get('host')}/images/productos/${section.image}`,
                    url : `${req.protocol}://${req.get('host')}/api/sections/${section.id}`
                }
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : message || 'ERROR en List Section'
            })
        }
    },

    createSection : async (req,res) => {
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

        const {id} = await createSection(data);

        const section = await getSectionById(id)

            return res.status(200).json({
                ok : true,
                data : {
                 ...section.dataValues,
                image : `${req.protocol}://${req.get('host')}/images/secciones/${section.image}`,
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

    updateSection : async (req,res) => {

        try {
            
           const sectionUpdated = await updateSection(req.params.id, req.body);

           return res.status(200).json({
            ok : true,
            message : 'Seccion Actualizada con exito',
            data : sectionUpdated
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

    deleteSection : async (req,res) => {

        try {

            await deleteSection(req.params.id); 

            return res.status(200).json({
                ok : true,
                message : 'Seccion eliminada con exito',               
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