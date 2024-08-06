const express = require('express')

var app = express()
const dbfile = require('./conn')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:"true"}))
const postroute = require('./routes/post')
app.use('/api/post',postroute)
app.get('/', (req, res)=>{
    res.end("Welcome to the server");
})

app.listen(5000, function(){
    console.log('Started successfully')
})