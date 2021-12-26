const mongoose = require('mongoose');
require('dotenv').config()
const dbUser = process.env.DB_USER||"dba";
const dbPassword = process.env.DB_PASS||"dVWTOYp3HW2EjF3w";
const dbName = process.env.DB_NAME||"spcome";
console.log(dbUser, dbPassword, dbName);
const dbUrl  = "mongodb+srv://"+dbUser+":"+dbPassword+"@cluster0.gkmow.mongodb.net/"+dbName+"?retryWrites=true&w=majority";
//var url = "mongodb+srv://dba:dVWTOYp3HW2EjF3w@cluster0.gkmow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbUrl,(err, con)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to DB");
    }
});