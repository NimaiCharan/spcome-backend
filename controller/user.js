require("../db.js");
const bcrypt = require("bcryptjs");

var mongoose = require("mongoose");
const { User } = require("../schemas/user");

exports.add_user = async (req, res) => {
  try {
    const UserDetails = mongoose.model("User", User);
    var userData = req.body;
    var salt = await bcrypt.genSalt(10);

    var hashedPassword = await bcrypt.hash(userData.password, salt);
    userData.password = hashedPassword;
    var user_data = new UserDetails({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      mobile: userData.mobile,
      address: userData.address,
      course: userData.course,
      adhaar: userData.adhaar,
      reg_no: userData.reg_no,
      thumbnail: userData.thumbnail,
    });
    user_data.save(user_data, (err, doc) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(doc);
      }
    });
  } catch (err) {
    console.log(err);
  }
};


exports.get_user = (req, res) => {
    try {
        var data = req.body;
        var reg_no = data.reg_no;
        var password = data.password;
       
        const UserDetails = mongoose.model("User", User);
        UserDetails.find({"reg_no":reg_no}, (err, doc) => {
        if (err) {
            res.send(err);
        } else {
            console.log(doc);
            bcrypt.compare(password, doc[0].password,  (err, result)=>{
                if(result){
                    res.status(200).send(doc);
                }
                else{
                    res.status(200).send("Invalid Crendentials");
                }
            }
        
            )
        }
    });
    } catch (err) {
        console.log(err);
    }

};