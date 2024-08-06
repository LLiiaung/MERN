import React, {   useEffect, useState } from 'react'
import {useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
function EditPost() {
    const params=useParams()
    const [title,settitle]=useState('')
    const [imageurl,setimageurl]=useState('')
    const [description,setdescription]=useState('')

    const navigate = useNavigate()
    useEffect(()=>{
        axios.post('/api/post/getpostdata', {postid:params.postid}).then(res=>{
            console.log(res.data[0])
            const postdata = res.data[0]
            settitle(postdata.title)
            setimageurl(postdata.imageurl)
            setdescription(postdata.description)

        }).catch((err)=>{
            console.log(err)
        })
    },[])


    function editPost() {
        const updatepost={
            title:title,
            imageurl:imageurl,
            description:description,
            postid:params.postid
        }
        axios.post('/api/post/updatepost',updatepost)
        .then(res=>{
            console.log(res)
            alert(res.data)
            navigate('/')
        }).then(
            err=>console.log(err)
        )
    }
    return <div className = 'row justify-content-center'>
        {/* <h1>This is EditPost component</h1>
        <h1>The post id = {params.postid}</h1> */}
        <div className = 'col-md-6'>
            <h1 className='m-3'>Edit the post</h1>
            <div>
                <input type = 'text' placeholder='title' className = 'form-control'
                value = {title} onChange={(e)=>settitle(e.target.value)}/>
                <input type = 'text' placeholder='imageurl' className = 'form-control'
                value = {imageurl} onChange={(e)=>setimageurl(e.target.value)}/>
                <textarea cols = '30' rows='10'placeholder='Description' className = 'form-control'
                value = {description} onChange={(e)=>setdescription(e.target.value)}/>
                <button onClick = {editPost}className='btn btn-success float-right'>Edit Post</button>
            </div>
        </div>
    </div>
}
export default EditPost;