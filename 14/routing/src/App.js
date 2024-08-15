import logo from './logo.svg';
import './App.css';
import ContactUs from './ContactUs';
import Home from './Home';
import Service from './Service';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} exact/>
          <Route path="/contactus" element={<ContactUs />} exact/>
          <Route path="/service" element={<Service />} exact/>
        </Routes>
        <nav>
          <Link to='https://www.google.com/'>google</Link>
          <br/>
          <Link to='/service'>service</Link>
        </nav>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
