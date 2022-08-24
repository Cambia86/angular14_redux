const express = require('express');
const router = express.Router();

const category_controller = require('../controllers/category');

router.get('/getcategory', category_controller.retrieveCategory);
router.get('/getcategory/:categoryId', category_controller.retrieveCategoryById);
router.post('/updateCategoryById/:categoryId', category_controller.updateCategoryById);
router.post('/createCategory/', category_controller.createCategory);
router.delete('/:categoryId', category_controller.deleteCategoryIdById);

module.exports = router;
