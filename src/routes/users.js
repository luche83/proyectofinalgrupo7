var express = require('express');
var router = express.Router();
const userController = require('../controllers/users');

/* /users*/

router.get('/login', userController.login)
router.get('/register', userController.register)
router.get('/perfil', userController.perfil)

module.exports = router;
