const express = require('express');
const {index, admin, search,} = require('../controllers/indexController');
const adminCheck = require('../middlewares/adminCheck');
const router = express.Router();

/* / */

router.get('/', index);
router.get('/admin', adminCheck, admin);
router.get('/search', search);

module.exports = router;
