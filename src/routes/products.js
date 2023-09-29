const express = require('express');
const router = express.Router();
const {detail, add, edit, cart, create, remove, index, update,} = require('../controllers/productsController');
/*const productsController = require('../controllers/productsController');*/
const upload = require('../middlewares/upload');
const adminCheck = require('../middlewares/adminCheck');
const productAddValidator = require('../validations/productAddValidator');
const productEditValidator = require('../validations/productEditValidator');

/* /products */

router.get('/', index);
router.get('/cart', cart);
router.get('/detail/:id', detail);
router.get('/add',adminCheck, add);
router.post('/add', upload.single('image'), productAddValidator,create);
router.get('/edit/:id', edit);
router.put('/update/:id',upload.single('image'), productEditValidator ,update);
router.delete('/remove/:id', remove)

/* Tambien se puede expresar de esta manera

router
        .get('/detail/:id?', productsController.detail)
        .get('/cart', productsController.cart)
        .get('/add', productsController.add)


*/

module.exports = router;