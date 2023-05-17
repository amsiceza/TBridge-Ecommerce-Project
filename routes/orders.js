const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')
const { authentication } = require("../middleware/authentication");


router.post('/create', authentication, OrderController.create)
router.get('/getOrderProduct',authentication, OrderController.getOrderProduct)

module.exports = router;