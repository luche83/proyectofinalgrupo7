const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        return cb(null, './src/public/images/secciones')
    },
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}_sections_${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage
})


module.exports = upload