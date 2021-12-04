require("../db.js");
var mongoose = require("mongoose");
const { Notice } = require("../schemas/notice");


exports.add_notice = (req, res)=>{
    const notice = mongoose.model('Notice',Notice);
    
    console.log("NOTICE");
    var notice_data = new notice({
        notice_id : req.body.notice_id,
        notice_heading: req.body.notice_heading,
        notice_text: req.body.notice_text,
        valid_till: req.get.valid_till
    });

    notice_data.save((err, doc)=>{
        if(err){
            res.status(200).send(err)
        }
        res.send(doc)
    })

}
exports.get_notice = (req, res)=>{
    const notice = mongoose.model('Notice',Notice);
    notice.find({},(err, doc)=>{
        if(err)
            res.status(200).send(err);
        res.send(doc)
    })

}