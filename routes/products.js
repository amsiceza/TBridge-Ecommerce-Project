const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.post('/create',ProductController.create);
router.put('/updateById/:id',ProductController.updateById);



module.exports = router;