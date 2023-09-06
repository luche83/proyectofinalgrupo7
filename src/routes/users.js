//const userController = require('../controllers/users');

const express = require('express');
const router = express.Router();
const {add, edit, create, remove, update} = require('../controllers/usersController');
const uploadUser = require('../middlewares/uploadUser');
/* /users*/

router.get('/add', add);
router.post('/add',uploadUser.single('image'), create);
router.get('/edit/:id', edit);
router.put('/update/:id',uploadUser.single('image'), update);
router.delete('/remove/:id', remove)

module.exports = router;
