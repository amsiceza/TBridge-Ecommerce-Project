const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.post('/create',CategoryController.create);
router.get('/getById/:id',CategoryController.getById);
router.get('/getByName/:name',CategoryController.getByName);
router.get('/getAllCategories',CategoryController.getAllCategories);


module.exports = router;