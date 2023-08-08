const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsDetails');

/* /products */

router.get('/detail/:id?', productsController.details);
router.get('/cart', productsController.cart);


module.exports = router;