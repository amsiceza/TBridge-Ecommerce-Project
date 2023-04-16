const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { authentication, isAdmin } = require("../middleware/authentication");

router.post('/create',authentication, isAdmin, ProductController.create);
router.put('/updateById/:id',authentication, isAdmin, ProductController.updateById);
router.delete('/deleteById/:id',authentication, isAdmin, ProductController.deleteById);
router.get('/getAllProducts',ProductController.getAllProducts);
router.get('/getById/:id',ProductController.getById);
router.get('/getByName/:name',ProductController.getByName);
router.get('/getByPrice/:price',ProductController.getByPrice);
router.get('/orderDesc',ProductController.orderDesc);


module.exports = router;