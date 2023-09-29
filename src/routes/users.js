//const userController = require('../controllers/users');

const express = require('express');
const router = express.Router();
const {register,detail, edit, processRegister, remove, update, login, processLogin, profile, logout, profileEdit, updatePerfilEdit} = require('../controllers/usersController');
const uploadUser = require('../middlewares/uploadUser');
const registerValidator = require('../validations/registerValidator');
const perfilValidator = require('../validations/perfilValidator');
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');



/* /users*/

router.get('/register', register);
router.post('/register',uploadUser.single('image'), registerValidator, processRegister);
router.get('/edit/:id', edit);
router.put('/update/:id',uploadUser.single('image'),perfilValidator, update);
router.delete('/remove/:id', remove);
router.get('/login',notUserCheck, login);
router.post('/login', loginValidator, processLogin);
router.get('/profile',userCheck, profile);
router.get('/profileEdit',userCheck, profileEdit);
//router.put('/updatePerfilEdit/:id',uploadUser.single('image'),, updatePerfilEdit);
router.get('/detail', detail);
router.get('/logout', logout);




module.exports = router;
