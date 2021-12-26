require("../db.js");
var mongoose = require("mongoose");
const { Fees } = require("../schemas/fees");


exports.add_fees = (req, res)=>{
    const fees = mongoose.model('Fees',Fees);
    
    console.log("Fees");
    var fees_data = new fees({
        student_id : req.body.student_id,
        total_fees: req.body.total_fees,
        paid: req.body.paid,
        
    });

    fees_data.save((err, doc)=>{
        if(err){
            res.status(200).send(err)
        }
        res.send(doc)
    })

}
exports.get_fees_details= (req, res)=>{
    const fees = mongoose.model('Fees',Fees);
    fees.find({"student_id":req.query.student_id},(err, doc)=>{
        console.log(req.query.student_id);
        if(err)
            res.status(200).send(err);
        res.send(doc)
    })

}