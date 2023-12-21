const userAddValidator = require('../validations/registerValidator');
const productValidator = require('../validations/productAddValidator')
const express = require('express');
const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../controllers/APIs/cartApiController');
const { checkEmail, listUsers, showUser, createUser, updateUser, deleteUser } = require('../controllers/APIs/usersApiController');
const { getAllCategories, totalProductInDB, getAllSections, getAllRegions, getAllProducts, onCreateProduct, getCategoriesWithProducts, onUpdateProduct, onDeleteProduct } = require('../controllers/APIs/productsApiController');
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

const { listProducts, showProduct,createProduct, updateProduct, deleteProduct } = require('../controllers/APIs/apiProductsController');
const router = express.Router();

/* /api */

    router
    .get('/check-email', checkEmail)
    

    .get('/dashboard/categories/products', getCategoriesWithProducts)
    .get('/dashboard/categories', getAllCategories)
    .get('/dashboard/products/count', totalProductInDB)
    .get('/dashboard/sections', getAllSections)
    .get('/dashboard/regions', getAllRegions)
    .get('/dashboard/products', getAllProducts)
    .post('/dashboard/product', onCreateProduct)
    .put('/dashboard/product/:id', onUpdateProduct)
    .delete('/dashboard/product/:id', onDeleteProduct)
    

    // Cart

    .get('/cart', getCart)
    .post('/cart', addItemToCart)
    .delete('/cart',removeItemToCart)
    .delete('/cart/item', deleteItemToCart)
    .delete('/cart/all',clearCart)

    /* /usuarios */
      
    .get('/users',  listUsers)
    .get('/users/:id', showUser)
    .post('/users',uploadUser.single('image'), userAddValidator, createUser)
    .put('/users/:id', updateUser)
    .delete('/users/:id', deleteUser)
        
        .get('/products', listProducts)
        .get('/products/:id', showProduct)
        .post('/products',upload.fields([{name: "image"},{name: "images"}]), productValidator, createProduct)
        .put('/products/:id', updateProduct)
        .delete('/products/:id', deleteProduct)

    

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
