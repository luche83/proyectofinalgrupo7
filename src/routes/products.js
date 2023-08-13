const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/* /products */

router.get('/detail/:id?', productsController.details);
router.get('/cart', productsController.cart);
router.get('/add', productsController.add)


module.exports = router;