const express = require('express')
var app = express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res)=>{
    res.send('This is home page api')
})
app.get('/username', (req, res)=>{
    var username=['John','Alex','Ben']
    res.send(username)
})
app.post('/login',(req, res)=>{
    var username = req.body.username
    var password = req.body.password
    if (username == 'JS' && password == 'NodeJS') {
        res.send('login successful')
    } else {
        res.send('login failed')
    }
})
app.listen(5000, ()=>{
    console.log('server started on port 5000')
})