const express = require('express');
const router = express.Router();
const {detail, add, edit, cart, create, remove, update, products,} = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const adminCheck = require('../middlewares/adminCheck');
const productAddValidator = require('../validations/productAddValidator');
const productEditValidator = require('../validations/productEditValidator');

/* /products */

router.get('/all', products);
router.get('/cart', cart);
router.get('/detail/:id', detail);
router.get('/add',adminCheck, add);
router.post('/add', upload.fields([{name: "image"},{name: "images"}]), productAddValidator, create);
router.get('/edit/:id',adminCheck, edit);
router.put('/update/:id', upload.fields([{name: "image"},{name: "images"}]), productEditValidator, update);
router.delete('/remove/:id', remove)

module.exports = router;