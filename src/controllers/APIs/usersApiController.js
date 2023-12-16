const paginate = require('express-paginate');
const db = require('../../database/models');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../../service/users.services');
const { validationResult } = require('express-validator');


const checkEmail = async (req,res) => {
    const email = req.query.email;

    try {
        const user = await db.User.findOne({
            where : {
                email
            }
        })
        return res.status(200).json({
            ok : true,
            data : user ? true : false
        })
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || "Upps, hubo un error"
        })
    }
}

module.exports = {
    checkEmail,

    listUsers : async (req, res) => {
        try {
            
            const {total, users} = await getAllUsers(req.query.limit, req.skip);

            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(pagesCount, pagesCount, currentPage);

            return res.status(200).json({
                ok : true,
                
                data : users.map(user => {
                    return {
                        ...user.dataValues,
                        image : `${req.protocol}://${req.get('host')}/images/usuarios/${user.image}`,
                        url : `${req.protocol}://${req.get('host')}/api/users/${user.id}`
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
                error : message || 'ERROR en List Users'
            })
        }
    },

    showUser : async (req, res) => {
        try {
            
            const user = await getUserById(req.params.id)

            return res.status(200).json({
                ok : true,
                data : {
                    ...user.dataValues,
                    image : `${req.protocol}://${req.get('host')}/images/usuarios/${user.image}`,
                }
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : message || 'ERROR en List Users'
            })
        }
    },

    createUser : async (req,res) => {
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

        const {id} = await createUser(data);

        const user = await getUserById(id)

            return res.status(200).json({
                ok : true,
                data : {
                 ...user.dataValues,
                image : `${req.protocol}://${req.get('host')}/images/usuarios/${user.image}`,
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

    updateUser : async (req,res) => {

        try {
            
           const userUpdated = await updateUser(req.params.id, req.body);

           return res.status(200).json({
            ok : true,
            message : 'Usuario Actualizada con exito',
            data : userUpdated
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

    deleteUser : async (req,res) => {

        try {

            await deleteUser(req.params.id); 

            return res.status(200).json({
                ok : true,
                message : 'Usuario eliminada con exito',               
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