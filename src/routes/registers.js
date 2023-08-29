const express = require('express');
const router = express.Router();
const {detail, add, edit, create, remove, update} = require('../controllers/registersController');
const uploadUser = require('../middlewares/uploadUser');

//* /products 




router.get('/add', add);
router.post('/add',uploadUser.single('image'), create);
router.get('/edit/:id', edit);
router.put('/update/:id',uploadUser.single('image'), update);
router.delete('/remove/:id', remove)
//*router.get('/detail/:id', detail);
/* Tambien se puede expresar de esta manera

router
        .get('/detail/:id?', productsController.detail)
        .get('/cart', productsController.cart)
        .get('/add', productsController.add)


*/

module.exports = router;