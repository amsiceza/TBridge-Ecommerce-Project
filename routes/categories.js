const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const { authentication, isAdmin } = require("../middleware/authentication");

router.post('/create',CategoryController.create);
router.get("/getAll", CategoryController.getAll);
router.get('/getById/:id',CategoryController.getById);
router.get('/getByName/:name',CategoryController.getByName);
router.get('/getAllCategories',CategoryController.getAllCategories);
router.delete("/deleteById/:id", authentication, isAdmin, CategoryController.deleteById);
router.put("/updateById/:id", authentication, isAdmin, CategoryController.updateById);


module.exports = router;