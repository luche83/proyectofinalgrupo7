const express = require('express');
const router = express.Router();
const {detail, add, create, remove,} = require('../controllers/charactersController');


/* /products */

router.get('/add', add);

/*router.get('/detail/:id', detail);

router.post('/add', create);
router.delete('/remove/:id', remove)*/

/* Tambien se puede expresar de esta manera

router
        .get('/detail/:id?', productsController.detail)
        .get('/cart', productsController.cart)
        .get('/add', productsController.add)


*/

module.exports = router;