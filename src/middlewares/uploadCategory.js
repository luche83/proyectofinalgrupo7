const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        return cb(null, './src/public/images/categorias')
    },
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}_category_${path.extname(file.originalname)}`)
    }
})

const uploadCategory = multer({
    storage
})


module.exports = uploadCategory