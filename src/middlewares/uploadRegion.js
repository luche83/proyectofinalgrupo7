const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        return cb(null, './src/public/images/regiones')
    },
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}_regions_${path.extname(file.originalname)}`)
    }
})

const uploadRegion = multer({
    storage
})


module.exports = uploadRegion