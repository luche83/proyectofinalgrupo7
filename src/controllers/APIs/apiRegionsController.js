const createError = require('http-errors')
const paginate = require('express-paginate');
const { getAllRegions, getRegionById, createRegion, updateRegion, deleteRegion } = require("../../service/resgions.services");
const { validationResult } = require('express-validator');

module.exports = {
    listRegions : async (req, res) => {
        try {
            
            const {total, regions} = await getAllRegions(req.query.limit, req.skip);
            
            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(pagesCount, pagesCount, currentPage); 

            return res.status(200).json({
                ok : true,
                data : regions.map(region => {
                    return {
                        ...region.dataValues,
                        image : `${req.protocol}://${req.get('host')}/images/productos/${region.image}`,
                        url : `${req.protocol}://${req.get('host')}/api/regions/${region.id}`
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
                error : message || 'ERROR en List Regions'
            })
        }
    },

    showRegion : async (req, res) => {
        try {
            
            const region = await getRegionById(req.params.id)

            return res.status(200).json({
                ok : true,
                data : {
                    ...region.dataValues,
                    image : `${req.protocol}://${req.get('host')}/images/productos/${region.image}`,
                    url : `${req.protocol}://${req.get('host')}/api/regions/${region.id}`
                }
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : message || 'ERROR en List Region'
            })
        }
    },

    createRegion : async (req,res) => {
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

        const {id} = await createRegion(data);

        const region = await getRegionById(id)

            return res.status(200).json({
                ok : true,
                data : {
                 ...region.dataValues,
                image : `${req.protocol}://${req.get('host')}/images/regiones/${region.image}`,
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

    updateRegion : async (req,res) => {

        try {
            
           const regionUpdated = await updateRegion(req.params.id, req.body);

           return res.status(200).json({
            ok : true,
            message : 'Region Actualizada con exito',
            data : regionUpdated
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

    deleteRegion : async (req,res) => {

        try {

            await deleteRegion(req.params.id); 

            return res.status(200).json({
                ok : true,
                message : 'Region eliminada con exito',               
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

