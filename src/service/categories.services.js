const db = require('../database/models');

const getAllCategories = async (limit, offset) => {
    try {

        const {count, rows} = await db.Category.findAndCountAll({
           
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt']
            },
           
            limit,
            offset
        })

        return {
            total : count,
            categories : rows
        }
        
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Category",
        };
    }
}

const getCategoryById = async (id) => {
    try {

        if(!id || isNaN(id)){
            throw {
                status : 400,
                message : 'ID no encontrado'
            }
        }

        const category = await db.Category.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt']
            },
            
        })

        if(!category){
            throw {
                status : 404,
                message : 'Categoria no encontrado'
            }
        }

        return category

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Categoies",
        };
    }
}

const createCategory = async(data) => {

    try {
        const newCategory = await db.Category.create(data)

        return newCategory

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Agregar Categoria",
        };
    }

}

const updateCategory = async (id , dataCategory) => {
    try {

        const {title} = dataCategory

        const category = await db.Category.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt']
            },
            
        });

        if (!category){
            throw {
                status : 404,
                message : 'No hay Categoria con ese ID'
            }
        }

        category.title = title?.trim() || category.title;
        
        await category.save()

        await category.reload()

        return category
        
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
    }
}

const deleteCategory = async (id) => {
    try {

        if (isNaN(id)){
            throw {
                status : 404,
                message : 'ID Corrupto'
            }
        }

        const category = await db.Category.findByPk(id);

        if (!category){
            throw {
                status : 404,
                message : 'No hay categoria con ese ID'
            }
        }
        
        await category.destroy()

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
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}