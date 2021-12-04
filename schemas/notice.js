const mongoose = require('mongoose');


const noticeSchema = new mongoose.Schema({
    notice_id:{
        type: String,
        required:true,
        default: "NOT124578"
    },
    notice_heading:{
        type: String,
        required:true,
        default: "THIS IS AN HEADING"
    },
    notice_text:{
        type: String,
        required: true,
        default: "This is a notice text"
    },
    created_at:{
        type: Date,
        required: true,
        default: Date.now
    },
    valid_till:{
        type: Date,
        required:true,
        default: Date.now
    }

})

module.exports = mongoose.model('Notice',noticeSchema);