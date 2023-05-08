const express = require('express');
const router = express.Router();
const { authentication, isAdmin } = require("../middleware/authentication");
const upload = require('../middleware/multer'); 
const ProductController = require('../controllers/ProductController');


router.post('/create',authentication, isAdmin, upload.single('img'), ProductController.create);
router.put('/updateById/:id',authentication, isAdmin, upload.single('img'), ProductController.updateById);
router.delete('/deleteById/:id',authentication, isAdmin, ProductController.deleteById);
router.get('/getAllProducts',ProductController.getAllProducts);
router.get('/getById/:id',ProductController.getById);
router.get('/getByName/:name',ProductController.getByName);
router.get('/getByPrice/:price',ProductController.getByPrice);
router.get('/orderDesc',ProductController.orderDesc);


module.exports = router;