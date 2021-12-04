const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    reg_no:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        required:true,
        type:String,
    },
    course:{
        required:true,
        type:String,
    },
    adhaar:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:false,
        default: null
    },
    password:{
        type:String,
        required:true,
    },
    is_admin:{
        required:true,
        type:Boolean,
        default:false,
    },
    is_faculty:{
        required:true,
        type:Boolean,
        default:false,
    },
    created_at:{
        type:Date,
        default:Date.now,
        required:true,
    },
    last_login:{
        type:Date,
        default:Date.now,
        required:true,
    }
});

module.exports = mongoose.model('User',userSchema);


