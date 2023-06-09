const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const { authentication, isAdmin, } = require("../middleware/authentication");

router.post('/create',UserController.create)
router.post('/login',UserController.login)
router.get('/confirm/:emailToken',UserController.confirm)
router.delete('/logout',authentication,UserController.logout)
router.get('/getUserOrderProduct/:id',UserController.getUserOrderProduct)
router.get('/getConnectedUser',authentication,UserController.getConnectedUser)


module.exports = router;