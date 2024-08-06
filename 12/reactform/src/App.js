import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('password')
  const [name, setname] = useState('')
  const [age, setage] = useState()
  function showinput() {
    alert(username)
    alert(password)
  }
  function printvalues(event) {
    event.preventDefault()
    var user = {
      name : name,
      age : age
    }
    console.log(user)
  }
  return (
    <div className="App">
      <h1>React Form</h1>
      <form action = "https://www.google.com/">
        <input type = "text" placeholder = "username" value = {username} onChange={(e)=>{setusername(e.target.value)}}/>
        <br/>
        <input type = "text" placeholder = "password" calue = {password} onChange = {(e)=>{setpassword(e.target.value)}}/>
        <button onClick = {showinput}>show the input value</button>
      </form>

      <br/>
      <form onSubmit={printvalues}>
        <input type = "text" placeholder = "name" value = {name} onChange={(e)=>{setname(e.target.value)}}/>
        <br/>
        <input type = "text" placeholder = "age" calue = {age} onChange = {(e)=>{setage(e.target.value)}}/>
        <input type = "submit" value = "submit"/>
      </form>
    </div>
  );
}

export default App;
