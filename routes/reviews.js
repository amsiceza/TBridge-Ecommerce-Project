const express = require("express");
const { authentication } = require("../middleware/authentication");
const ReviewController = require("../controllers/ReviewController");
const router = express.Router();



router.post("/create", authentication, ReviewController.create);
router.get("/getAll", ReviewController.getAll);
router.put("/updateById/:id", authentication, ReviewController.updateById);
router.delete("/deleteById/:id", authentication, ReviewController.deleteById)


module.exports = router;