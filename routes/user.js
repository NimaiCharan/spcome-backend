const router = require('express').Router();


const userController = require('../controller/user');
router.post("/add_user", userController.add_user);
router.get("/get_user", userController.get_user);

module.exports = router;