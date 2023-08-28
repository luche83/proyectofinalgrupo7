const express = require('express');
const router = express.Router();
const {detail, add, edit, cart, create, remove,} = require('../controllers/productsController');
const upload = require('../middlewares/upload');

/* /products */


router.get('/add', add);
router.post('/add', upload.single('image'), create);
router.get('/edit/:id', edit);
router.delete('/remove/:id', remove)


module.exports = router;