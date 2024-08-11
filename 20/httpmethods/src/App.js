import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState } from 'react';
function App() {
  const [posts, setposts] = useState([])
  async function getdata() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(await response.json())
  }
  function getdatausingaxios() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      console.log(response.data)
      setposts(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const titles = posts.map((posts)=>{
    return(
      <h1>{posts.id}{posts.title}</h1>
    )
  })
  return (
    <div className="App">
      <h1>HTTP Method</h1>
      <button onClick = {getdata}>Get Data From API</button>
      <button onClick={getdatausingaxios}>Get Data Using Axios</button>
      {titles}
    </div>
  );
}

export default App;
