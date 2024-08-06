import React,{useEffect, useState} from 'react'
import PostItem from './PostItem'
import axios from 'axios'; 

function PostList() {
    const[postsdata,setpostsdata]=useState([])
    useEffect(()=>{
        axios.get('/api/post/getposts')
        .then(res=>{
            console.log(res.data)
            setpostsdata(res.data)
        }).then(
            err=>console.log(err)
        )
    },[])
    const postlist = postsdata.map(post=>{
        return (
            <div className = 'row justify-content-center'>
                <PostItem post = {post}/>
            </div>
        )
    })
    return <div>
        {/* <h1>This is PostList component</h1>
        <PostItem/> */}
        <a href='/addpost' className = 'btn btn-primary m-5'>Add Post</a>
        {postlist}
    </div>
}
export default PostList;