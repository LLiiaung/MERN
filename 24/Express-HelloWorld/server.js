const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.end('This is helloworld in home page using express')
})
app.get('/contactus', function(req, res) {
    res.end('contact us page using express framework with nodemon server')
})
app.listen(5000, function(){
    console.log('connection successful')
})