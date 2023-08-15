const express = require('express');
const router = express.Router();
const {detail, add, create} = require('../controllers/productsController');
const productsController = require('../controllers/productsController');

/* /products */


router.get('/cart', productsController.cart);
router.get('/detail/:id', detail);
router.get('/add', add);
router.post('/add', create);

/* Tambien se puede expresar de esta manera

router
        .get('/detail/:id?', productsController.detail)
        .get('/cart', productsController.cart)
        .get('/add', productsController.add)


*/

module.exports = router;