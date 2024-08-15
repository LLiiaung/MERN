import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ConditionalRendering from './ConditionalRendering';
function App() {
  const[numbers, setnumbers] = useState([1,2,3,4,5,6,7,8,9,10]);
  const[names, setnames] = useState(["angularjs","reactjs","vuejs","nodejs"]);

  const[players, setpalyers] = useState([{name:"Bob", country:"US"}, {name:"John", country:"US"}]);

  const numberlist = numbers.map((number)=>{
    return <h1>{number}</h1>
  })
  const namelist = names.map((name)=>{
    return <h1>{name}</h1>
  })
  return (
    <div className="App">
      <h1>React Maps</h1>
      {numberlist}
      {namelist}
      <ConditionalRendering/>
    </div>
  );
}

export default App;
