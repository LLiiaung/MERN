const express = require('express')
const router = express.Router() 

router.get('/getproducts',(req, res)=>{
    var products = ['iphone', 'one plus', 'samsung']
    res.send(products)
})

router.get('/addproduct',(req, res)=>{
    res.send('This is about adding product')
})

module.exports=router