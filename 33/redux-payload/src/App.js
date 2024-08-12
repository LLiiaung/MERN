import logo from './logo.svg';
import './App.css';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import gamesReducer from './gamesReducer';

function App() {
  const store = createStore(gamesReducer)
  return (
    <div className="App">
      <h1>Redux Payload</h1>
      <Provider store={store}>
        <CompA/>
        <CompB/>
        <CompC/>
      </Provider>
    
    </div>
  );
}

export default App;
