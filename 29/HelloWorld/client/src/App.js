import React, {useState} from 'react' 
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function App() {
  const[backendData, setbackendData]=useState([])
  const[username, setusername]=useState([])
  // function getdata() {

  //   axios.get('/api/getnames').
  //     then(res=>{
  //       console.log(res)
  //       setbackendData(res.data)
  //     }).
  //     catch(err=>console.log(err))

  // }
 function sendData() {
    var user = {
      username:username
    }
    axios.post('api/validateusername', user)
    .then(res=>{
      console.log(res)
      setbackendData(res.data)
    })
    .catch(err=>console.log(err))
 }
  return (
    <div className="App">
      {/* <h1>This is from React</h1>
      <button onClick={getdata}>Get Data from Node JS</button>
      <h1>Backend Data <br/> {backendData}</h1> */}
      <input type = 'text' value = {username} onChange= {(e)=>{setusername(e.target.value)}}/>
      <button onClick = {sendData}>Send data to Node JS</button>
      <h1>Backend response <br/>{backendData}</h1>
    </div>
  );
}

export default App;
