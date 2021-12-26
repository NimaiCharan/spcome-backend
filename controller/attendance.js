require("../db.js");
var mongoose = require("mongoose");
const { Attendance } = require("../schemas/attendence");


exports.add_attn = (req, res)=>{
    const attnd = mongoose.model('Attendance',Attendance);
    
    console.log("ATTENDANCE");
    var add_fees = new attnd({
        student_id : req.body.student_id,
        subject_id: req.body.subject_id,
        subject_name: req.body.subject_name,
        attendance: req.get.attendance,
        total: req.get.total
    });

    atten_data.save((err, doc)=>{
        if(err){
            res.status(200).send(err)
        }
        res.send(doc)
    })

}
exports.get_attn = (req, res)=>{
    const attnd = mongoose.model('Attendance',Attendance);
    attnd.find({"student_id":req.query.student_id},(err, doc)=>{
        console.log(req.body.student_id);
        if(err)
            res.status(200).send(err);
        res.send(doc)
    })

}