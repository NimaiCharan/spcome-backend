const mongoose = require('mongoose');


const feesSchema = new mongoose.Schema({
    student_id:{
        type: String,
        required:true,
        default: "test_id"
    },
    total_fees:{
        type: Number,
        required:true,
        default: 150000
    },
    paid:{
        type: Number,
        required: true,
        default: 0
    },
   
    last_paid_date:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Fees',feesSchema);