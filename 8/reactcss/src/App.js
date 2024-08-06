import logo from './logo.svg';
import './App.css';
import CC from './CC'
import Second from './Second'
function App() {
  return (
    <div className="App">
      <h1 style = {{color:'red',backgroundColor:'green'}} className='fh1'>
        CSS in react JS
      </h1>
      <h2  className='sh1'>
        CSS in react JS
      </h2>
      <h1>event handling in react</h1>
              {/* <button style = {{color:'red',backgroundColor:'green'}}>click me</button> */}
      <CC/>
      <Second/>
    </div>
  );
}

export default App;
