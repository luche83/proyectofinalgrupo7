const userAddValidator = require('../validations/registerValidator');
const productValidator = require('../validations/productAddValidator')
const express = require('express');
const { checkEmail, listUsers, showUser, createUser, updateUser, deleteUser } = require('../controllers/APIs/usersApiController');
const { listProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/APIs/apiProductsController');
const { listCategories, showCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/APIs/apiCaregoriesController');
const { listRegions, showRegion, createRegion, updateRegion, deleteRegion } = require('../controllers/APIs/apiRegionsController');
const { listSections, showSection, createSection, updateSection, deleteSection } = require('../controllers/APIs/apiSectionsController');
const upload = require('../middlewares/upload');
const uploadUser = require('../middlewares/uploadUser');
const uploadCategory = require('../middlewares/uploadCategory');
const categoryValidator = require('../validations/categoryValidator');
const uploadRegion = require('../middlewares/uploadRegion');
const regionValidator = require('../validations/regionValidator');
const uploadSection = require('../middlewares/uploadSection');
const sectionValidator = require('../validations/sectionValidator');
const router = express.Router();

/* /api */

    router
    .get('/check-email', checkEmail)
    


module.exports = router;
