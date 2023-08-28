const express = require('express');
const {index, admin, search} = require('../controllers/indexController')
const router = express.Router();

/* / */

router.get('/', index);
router.get('/admin', admin);
router.get('/search', search);

module.exports = router;
