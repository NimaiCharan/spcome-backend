const router = require('express').Router();


const attendanceController = require('../controller/attendance');
router.post("/set_attendance", attendanceController.add_attn);
router.get("/get_attendance", attendanceController.get_attn);

module.exports = router;