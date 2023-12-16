const db = require('../database/models');

const getAllUsers = async (limit, offset) => {
    try {

        const {count, rows} = await db.User.findAndCountAll({
            attributes : {
            exclude : ['createdAt', 'updatedAt', 'deletedAt', 'password', 'birthday', 'address', 'city', 'province', 'roleId']
            },
            limit,
            offset,
            include : [
                {
                    association : 'role',
                    attributes : ['name']
                }
            ]
        })

        return {
            total : count,
            users : rows
        }
        
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Users",
        };
    }
    
}

const getUserById = async (id) => {
    try {

        if(!id || isNaN(id)){
            throw {
                status : 400,
                message : 'ID no encontrado'
            }
        }

        const user = await db.User.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt', 'password', 'birthday', 'address', 'city', 'province', 'roleId']
            },
            include : [
                {
                    association : 'role',
                    attributes : ['name']
                }
            ]
            
        })

        if(!user){
            throw {
                status : 404,
                message : 'Usuario no encontrado'
            }
        }

        return user

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Usuario",
        };
    }

}

const createUser = async(data) => {

    try {
        const newUser = await db.User.create(data)

        return newUser

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || "ERROR en el servicio de Agregar Usuario",
        };
    }

}

const updateUser = async (id , dataUser) => {
    try {

        const {name, surname, email, birthday, address, city, province, roleId, images} = dataUser

        const user = await db.User.findByPk(id, {
            attributes : {
                exclude : ['createdAt', 'updatedAt', 'deletedAt', 'roleId']
            },
            include : [
                {
                    association : 'role',
                    attributes : ['id', 'name']
                }
                
        ]
        });

        if (!user){
            throw {
                status : 404,
                message : 'No hay Usuario con ese ID'
            }
        }

        user.name = name?.trim() || user.name;
        user.surname = surname?.trim() || user.surname;
        user.email = email?.trim() || user.email;
        user.birthday = birthday || user.birthday;
        user.address = address?.trim() || user.address;
        user.city = city?.trim() || user.city;
        user.province = province?.trim() || user.province;
        user.roleId = roleId || user.roleId;

        await user.save()

        await user.reload()

        return user
        
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
    }
}

const deleteUser = async (id) => {
    try {

        if (isNaN(id)){
            throw {
                status : 404,
                message : 'ID Corrupto'
            }
        }

        const user = await db.User.findByPk(id);

        if (!user){
            throw {
                status : 404,
                message : 'No hay producto con ese ID'
            }
        }
        
        await user.destroy()

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
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}