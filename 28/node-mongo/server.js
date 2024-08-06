const express = require('express')
var app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/sports')
app.get('/', (req, res)=>{
    res.send('Home')
})
app.post('/addgame',(req, res)=>{
    var name = req.body.name
    var country = req.body.country
    var player = req.body.player
    var newgame = new GameModel({name:name, country:country, player:player})
    newgame.save().then(() => {
        res.send("Game added successfully to DB");
    })
    .catch(err => {
        res.status(500).send("Adding game failed");
    });
}) 
app.post('/deletegames',(req, res)=>{
    GameModel.findOneAndDelete({name:req.body.name})
    .then(() => {
        res.send("Game deleted successfully to DB");
    })
    .catch(err => {
        res.status(500).send("deleting game failed");
    });
})
app.post('/getgames',(req, res)=>{
    GameModel.find().then(documents => res.send(documents))
    .catch(err => res.status(500).send("Getting games failed"));
})
app.post('/updategames',(req, res)=>{
    GameModel.findOneAndUpdate({name:req.body.name},{player:"newPlayer"})
    .then(documents => res.send("Document updated successfully"))
    .catch(err => res.status(500).send("Updating games failed"));
})
const GameModel = mongoose.model('games',{name:String, country:String, player:String})
app.listen(5000, (req, res)=>{
    console.log('Server started on port')
})