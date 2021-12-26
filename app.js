const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
var db  = require('./db.js')
const port = process.env.PORT || 3002;
const userRouter =  require('./routes/user');
const noticeRouter = require('./routes/notice')
var attendanceRouter = require('./routes/attendance')
var feesRouter = require('./routes/fees')
const base = process.env.BASE_URL ||'/api/v1'


app.use(cors());
app.use((req,res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Allow');
    next();
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use(base+"/users", userRouter);
app.use(base+"/notice", noticeRouter);
app.use(base+"/attendance", attendanceRouter);
app.use(base+"/fees", feesRouter);

app.listen(port, () => {
    console.log(`ERP Backend listening at http://localhost:${port}`)
  })

module.exports = app;