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

/* /productos */
    router
        .get('/products', listProducts)
        .get('/products/:id', showProduct)
        .post('/products',upload.fields([{name: "image"},{name: "images"}]), productValidator, createProduct)
        .put('/products/:id', updateProduct)
        .delete('/products/:id', deleteProduct)

    /* /usuarios */
    
    .get('/check-email', checkEmail)
    .get('/users',  listUsers)
    .get('/users/:id', showUser)
    .post('/users',uploadUser.single('image'), userAddValidator, createUser)
    .put('/users/:id', updateUser)
    .delete('/users/:id', deleteUser)

    /* /categorias */
    
    .get('/categories',  listCategories)
    .get('/categories/:id', showCategory)
    .post('/categories',uploadCategory.single('image'), categoryValidator, createCategory)
    .put('/categories/:id', updateCategory)
    .delete('/categories/:id', deleteCategory)

    /* /regiones */
   
    .get('/regions',  listRegions)
    .get('/regions/:id', showRegion)
    .post('/regions',uploadRegion.single('image'), regionValidator, createRegion)
    .put('/regions/:id', updateRegion)
    .delete('/regions/:id', deleteRegion)

    /* /sections */
    
    .get('/sections',  listSections)
    .get('/sections/:id', showSection)
    .post('/sections',uploadSection.single('image'), sectionValidator, createSection)
    .put('/sections/:id', updateSection)
    .delete('/sections/:id', deleteSection)

module.exports = router;
