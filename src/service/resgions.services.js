const db = require('../database/models');

const getAllRegions = async (limit, offset) => {
    try {

        const {count, rows} = await db.Region.findAndCountAll({
            
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt']
            },

            limit,
            offset
        })

        return {
            total : count,
            regions : rows
        }
        
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Regions",
        };
    }
}

const getRegionById = async (id) => {
    try {

        if(!id || isNaN(id)){
            throw {
                status : 400,
                message : 'ID no encontrado'
            }
        }

        const region = await db.Region.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt']
            },
            
        })

        if(!region){
            throw {
                status : 404,
                message : 'Region no encontrado'
            }
        }

        return region

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Categoies",
        };
    }
}

const createRegion = async(data) => {

    try {
        const newRegion = await db.Region.create(data)

        return newRegion

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Agregar Region",
        };
    }

}

const updateRegion = async (id , dataRegion) => {
    try {

        const {title} = dataRegion

        const region = await db.Region.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt']
            },
            
        });

        if (!region){
            throw {
                status : 404,
                message : 'No hay Region con ese ID'
            }
        }

        region.title = title?.trim() || region.title;
        
        await region.save()

        await region.reload()

        return region
        
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
    }
}

const deleteRegion = async (id) => {
    try {

        if (isNaN(id)){
            throw {
                status : 404,
                message : 'ID Corrupto'
            }
        }

        const region = await db.Region.findByPk(id);

        if (!region){
            throw {
                status : 404,
                message : 'No hay region con ese ID'
            }
        }
        
        await region.destroy()

        return null
        
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
    }
}

module.exports = {
    getAllRegions,
    getRegionById,
    createRegion,
    updateRegion,
    deleteRegion
}