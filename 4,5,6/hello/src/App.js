import logo from "./logo.svg";
import "./App.css";
import CC from "./CC";
import FC from "./FC";
import Parent from "./Parent";
import ParentClass from "./ParentClass";
function App() {
  return (
    <div className="App">
      <h1>react application</h1>
      <CC />
      <FC />
      <Parent />
      <ParentClass name='Leo'/>
    </div>
  );
}

export default App;
