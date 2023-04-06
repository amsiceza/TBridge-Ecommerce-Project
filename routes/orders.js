const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')

router.post('/create', OrderController.create)
router.get('/getOrderProduct', OrderController.getOrderProduct)

module.exports = router;