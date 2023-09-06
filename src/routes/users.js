//const userController = require('../controllers/users');

const express = require('express');
const router = express.Router();
const {add, edit, create, remove, update, login, processLogin, profile} = require('../controllers/usersController');
const uploadUser = require('../middlewares/uploadUser');
/* /users*/

router.get('/add', add);
router.post('/add',uploadUser.single('image'), create);
router.get('/edit/:id', edit);
router.put('/update/:id',uploadUser.single('image'), update);
router.delete('/remove/:id', remove);
router.get('/login', login);
router.post('/login', processLogin);
router.get('/profile', profile)

module.exports = router;
