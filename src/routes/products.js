const express = require('express');
const router = express.Router();
const {detail, add, create, remove,} = require('../controllers/productsController');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/upload');

/* /products */

router.get('/', index);
router.get('/cart', cart);
router.get('/detail/:id', detail);
router.get('/add', add);
router.post('/add', upload.single('image'), create);
router.get('/edit/:id', edit);
router.delete('/remove/:id', remove)

/* Tambien se puede expresar de esta manera

router
        .get('/detail/:id?', productsController.detail)
        .get('/cart', productsController.cart)
        .get('/add', productsController.add)


*/

module.exports = router;