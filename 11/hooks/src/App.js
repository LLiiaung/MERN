import logo from "./logo.svg";
import "./App.css";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import Home from "./Home";
function App() {

  return (
    <div className="App">
      <h1>React hooks</h1>
      <UseState/>
      <UseEffect/>
      <Home/>
    </div>
  );
}

export default App;
