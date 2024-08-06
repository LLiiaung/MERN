const express = require('express')

var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/', (req, res)=>{
    res.send("Welcome to the server");
})
app.get('/api/helloworld',(req, res)=>{
    res.send('Helloworld from Node JS')
}) 
app.get('/api/getnames',(req, res)=>{
    var names = ['Ben', 'Bob']
    res.send(names)
}) 
app.listen(5000, function() {
    console.log('Node JS server started');
})

app.post('/api/validateUserName',(req, res)=>{
    var username = req.body.username
    res.send('The received value is ' + username)
}) 