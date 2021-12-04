const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
var db  = require('./db.js')
const port = process.env.PORT || 3001;
const userRouter =  require('./routes/user');
const noticeRouter = require('./routes/notice')
const base = process.env.BASE_URL


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use(base+"/users", userRouter);
app.use(base+"/notice", noticeRouter);

app.listen(port, () => {
    console.log(`ERP Backend listening at http://localhost:${port}`)
  })