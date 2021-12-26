const mongoose = require('mongoose');


const attendanceSchema = new mongoose.Schema({
    student_id:{
        type: String,
        required:true,
        default: "test_id"
    },
    subject_id:{
        type: String,
        required:true,
        default: "PGD001"
    },
    subject_name:{
        type: String,
        required: true,
        default: "PGDCA"
    },
    attendance:{
        type: Number,
        required: true,
        default: 0
    },
    total:{
        type: Number,
        required:true,
        default: 0
    }

})

module.exports = mongoose.model('Attendance',attendanceSchema);