const db = require('../database/models');

const getAllProducts = async (limit, offset) => {
    try {

        const {count, rows} = await db.Product.findAndCountAll({
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt', 'categoryId', 'sectionId', 'regionId']
            },
            limit,
            offset,
            include : [
                {
                    association : 'images',
                    attributes : ['file']
                },
                {
                    association : 'category',
                    attributes : ['title']
                },
                {
                    association : 'section',
                    attributes : ['title']
                },
                {
                    association : 'region',
                    attributes : ['title']
                },
            ]
        })

        return {
            total :count,
            products : rows
        }
        
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Producto",
        };
    }
}

const getProductById = async (id) => {
    try {

        if(!id || isNaN(id)){
            throw {
                status : 400,
                message : 'ID no encontrado'
            }
        }

        const product = await db.Product.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt', 'categoryId', 'sectionId', 'regionId']
            },
            include : [
                {
                    association : 'images',
                    attributes : ['file']
                },
                {
                    association : 'category',
                    attributes : ['title']
                },
                {
                    association : 'section',
                    attributes : ['title']
                },
                {
                    association : 'region',
                    attributes : ['title']
                },
            ]
        })

        if(!product){
            throw {
                status : 404,
                message : 'Producto no encontrado'
            }
        }

        return product

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Producto",
        };
    }
}

const createProduct = async(data) => {

    try {
        const newProduct = await db.Product.create(data)

        return newProduct

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Producto",
        };
    }

}

const updateProduct = async (id , dataProduct) => {
    try {

        const {title, price, discount, amount, amountmin, description, categoryId, sectionId,regionId, images} = dataProduct

        const product = await db.Product.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt', 'categoryId', 'sectionId', 'regionId']
            },
            include : [
                {
                    association : 'category',
                    attributes : ['id', 'title']
                },
                {
                    association : 'section',
                    attributes : ['id', 'title']
                },
                {
                    association : 'region',
                    attributes : ['id', 'title']
                }
                
        ]
        });

        if (!product){
            throw {
                status : 404,
                message : 'No hay Productos con ese ID'
            }
        }

        product.title = title?.trim() || product.title;
        product.price = price || product.price;
        product.discount = discount || product.discount;
        product.amount = amount || product.amount;
        product.amountmin = amountmin || product.amountmin;
        product.description = description?.trim() || product.description;
        product.categoryId = categoryId || product.categoryId;
        product.sectionId = sectionId || product.sectionId;
        product.regionId = regionId || product.regionId;

        await product.save()

        await product.reload()

        return product
        
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
    }
}

const deleteProduct = async (id) => {
    try {

        if (isNaN(id)){
            throw {
                status : 404,
                message : 'ID Corrupto'
            }
        }

        const product = await db.Product.findByPk(id);

        if (!product){
            throw {
                status : 404,
                message : 'No hay producto con ese ID'
            }
        }
        
        await product.destroy()

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
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}