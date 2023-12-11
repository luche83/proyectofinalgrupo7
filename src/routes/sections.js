const express = require('express');
const router = express.Router();
const {add, edit, create, remove, update} = require('../controllers/sectionsController');
const upload = require('../middlewares/upload');


/* /products */

router.get('/add', add);
//router.post('/add', upload.fields([{name: "image"},{name: "images"}]), create);
router.get('/edit/:id', edit);
//router.put('/update/:id', upload.fields([{name: "image"},{name: "images"}]), update);
//router.delete('/remove/:id', remove)

module.exports = router;