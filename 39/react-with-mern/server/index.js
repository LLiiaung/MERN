const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
var messages = ['Hi', 'HELLO', 'How are you']
app.use(cors())
app.get("/", (req, res)=>{
    res.send('Hello World')
})

app.get("/api", (req, res)=>{
    res.send({message:'Hello World From Node JS'})
})

app.get("/api/messages", (req, res)=>{
    
    res.send(messages)
})

app.post("/api/addnewmessage", (req, res)=>{
    
    messages.push(req.body.message)
    res.send(messages)
})

const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})