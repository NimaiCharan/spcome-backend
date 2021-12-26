const router = require('express').Router();


const feesController = require('../controller/fees');
router.post("/add_fees", feesController.add_fees);
router.get("/get_fees", feesController.get_fees_details);

module.exports = router;