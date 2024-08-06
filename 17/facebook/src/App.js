import logo from './logo.svg';
import './App.css';
// import ContactUs from './ContactUs';
import Dashboard from './Dashboard';
import Body from './Body';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/body" element={<Body />} exact/>
          <Route path="/dashboard" element={<Dashboard />} exact/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
