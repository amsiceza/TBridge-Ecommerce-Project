const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.post('/create',ProductController.create);
router.put('/updateById/:id',ProductController.updateById);
router.delete('/deleteById/:id',ProductController.deleteById);
router.get('/getAllProducts',ProductController.getAllProducts);
router.get('/getById/:id',ProductController.getById);
router.get('/getByName/:name',ProductController.getByName);



module.exports = router;