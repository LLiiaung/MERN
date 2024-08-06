import logo from './logo.svg';
import './App.css';
import CC from './CC'
function App() {
  // function getAlert() {
  //   alert('clicked');
  // }
  // function inputAlert() {
  //   alert('The input is changing');
  // }
  // function hoverAlert() {
  //   alert('Hover');
  // }
  return (
    <div className="App">
      <h1>event handling in react</h1>
      <CC/>
       {/* <button onClick = {getAlert}>click me</button>
      <input type = 'text' onChange = {inputAlert}></input>
      <h2 onMouseOver={inputAlert}>Hover here to get alert</h2>   */}
    </div>
  );
}

export default App;
