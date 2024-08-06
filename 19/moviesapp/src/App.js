import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import AddMovie from './AddMovie';
import Movielist from './Movielist';
import Moviescontext from './Moviescontext';
function App() {
  return (
    <div className="App">
      <h1>Movies App</h1>
      <Moviescontext>
        <Navbar/>
        <AddMovie/>
        <Movielist/>
      </Moviescontext>

    </div>
  );
}

export default App;
