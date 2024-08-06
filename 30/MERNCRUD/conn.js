const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/merncrud');

const dbobject = mongoose.connection

dbobject.on('connected', ()=>console.log('MongoDB connection successful'))
dbobject.on('error', ()=>console.log('MongoDB connection failed'))
module.exports = mongoose