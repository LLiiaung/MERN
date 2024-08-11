import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[username, setusername]= useState("");
  const[framework, setframework] = useState("");
  const[language, setlanguage] = useState("");
  function addtolocalstorage() {
    localStorage.setItem("username", username)
  } 
  function savelanguage() {
    var courses=JSON.parse(localStorage.getItem("courses") || "[]") 
    var course = {
      language:language,
      framework:framework
    }
    courses.push(course)
    localStorage.setItem("courses",JSON.stringify(courses))
  }
  return (
    <div className="App">
      <h1>local storage</h1>
      <input type = "text" placeholder = "username" value = {username} onChange={(e)=>{setusername(e.target.value)}}/>
      <br/>
      <button onClick = {addtolocalstorage}>Add to local storage</button>
      <h1>The value inside localstorage is {localStorage.getItem('username')}</h1>
      <input type = "text" placeholder = "language" value = {language} onChange={(e)=>{setlanguage(e.target.value)}}/>
      <br/>
      <input type = "text" placeholder = "framework" value = {framework} onChange={(e)=>{setframework(e.target.value)}}/>
      <br/>
      <button onClick = {savelanguage}>Add to local storage</button>
    </div>
  );
}

export default App;
