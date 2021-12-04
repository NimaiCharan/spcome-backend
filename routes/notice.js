const router = require('express').Router();


const noticeController = require('../controller/notice');
router.post("/set_notice", noticeController.add_notice);
router.get("/get_notice", noticeController.get_notice);

module.exports = router;