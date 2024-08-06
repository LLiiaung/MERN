import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Items from './Items'; 
import cartReducer from './cartReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

function App() {
  const store = createStore(cartReducer)
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
        <Items/>

      </Provider>
     
  
    </div>
  );
}

export default App;
