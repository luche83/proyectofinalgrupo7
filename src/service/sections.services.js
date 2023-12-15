const db = require('../database/models');

const getAllSections = async (limit, offset) => {
    try {

        const {count, rows} = await db.Section.findAndCountAll({
            
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt']
            },

            limit,
            offset
        })

        return {
            total : count,
            sections : rows
        }
        
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Sections",
        };
    }
}

const getSectionById = async (id) => {
    try {

        if(!id || isNaN(id)){
            throw {
                status : 400,
                message : 'ID no encontrado'
            }
        }

        const section = await db.Section.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt']
            },
            
        })

        if(!section){
            throw {
                status : 404,
                message : 'Section no encontrado'
            }
        }

        return section

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Secciones",
        };
    }
}

const createSection = async(data) => {

    try {
        const newSection = await db.Section.create(data)

        return newSection

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Agregar Seccion",
        };
    }

}

const updateSection = async (id , dataSection) => {
    try {

        const {title} = dataSection

        const section = await db.Section.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt']
            },
            
        });

        if (!section){
            throw {
                status : 404,
                message : 'No hay seccion con ese ID'
            }
        }

        section.title = title?.trim() || section.title;
        
        await section.save()

        await section.reload()

        return section
        
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
    }
}

const deleteSection = async (id) => {
    try {

        if (isNaN(id)){
            throw {
                status : 404,
                message : 'ID Corrupto'
            }
        }

        const section = await db.Section.findByPk(id);

        if (!section){
            throw {
                status : 404,
                message : 'No hay seccion con ese ID'
            }
        }
        
        await section.destroy()

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
    getAllSections,
    getSectionById,
    createSection,
    updateSection,
    deleteSection
}