
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        return cb(null, './src/public/images/usuarios')
    },
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}_users_${path.extname(file.originalname)}`)
    }
})

const uploadUser = multer({
    storage
})


module.exports = uploadUser