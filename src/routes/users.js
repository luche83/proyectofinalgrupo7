//const userController = require('../controllers/users');

const express = require('express');
const router = express.Router();
const {register,detail, edit, processRegister, remove, update, login, processLogin, profile, logout} = require('../controllers/usersController');
const uploadUser = require('../middlewares/uploadUser');

/* /users*/

router.get('/register', register);
router.post('/register',uploadUser.single('image'), processRegister);
router.get('/edit/:id', edit);
router.put('/update/:id',uploadUser.single('image'), update);
router.delete('/remove/:id', remove);
router.get('/login', login);
router.post('/login', processLogin);
router.get('/profile', profile);
router.get('/detail', detail);
router.put('./logout', logout);

module.exports = router;
