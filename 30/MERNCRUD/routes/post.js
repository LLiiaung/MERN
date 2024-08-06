const express= require('express')
const router=express.Router()
const mongoose = require('mongoose')
const schema = mongoose.Schema
const postschema = new schema({
    title:String,
    imageurl:String,
    description:String,
    postid:String
})
// router.get('/test', (req, res)=>{
//     res.end('Hello World using router')
// })

const postModel = mongoose.model('posts',postschema)

router.post('/addnewpost',(req, res)=>{
    const newpost = new postModel({
        title:req.body.title,
        imageurl:req.body.imageurl,
        description:req.body.description,
        postid:req.body.postid
    }) 
    newpost.save()
        .then(result => {
            console.log('Post saved successfully:', result);   
            res.status(200).json('Post saved successfully');
        })
        .catch(err => {
            console.error('Error saving post:', err);
            res.status(500).json('Error saving post');
        });
})

router.get('/getposts',(req, res)=>{
    postModel.find({})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            console.log('Error');
            res.send(err);
        })
}) 


router.post('/getpostdata',(req, res)=>{
    postModel.find({postid:req.body.postid})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        })
}) 

router.post('/updatepost',(req, res)=>{
    postModel.findOneAndUpdate({postid:req.body.postid},{
        title:req.body.title,
        imageurl:req.body.imageurl,
        description:req.body.description
    })
        .then(() => {
            res.send('Post updated successfully')
        })
        .catch(err => {
            res.send(err);
        })
}) 

router.post('/deletepost',(req, res)=>{
    postModel.findOneAndDelete({postid:req.body.postid})
        .then(() => {
            res.send('Post deleted successfully')
        })
        .catch(err => {
            res.send(err);
        })
}) 

module.exports = router