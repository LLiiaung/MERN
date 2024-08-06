import { Provider, createSelectorHook } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import itemsReducer from './reducers/itemsReducer'
import usersReducer from './reducers/usersReducer'
import rootReducer from './reducers/rootReducer'
import Test from './Test'
function App() {
  const store = createStore(rootReducer)
  return (
    <div className="App">
     <h1>combineReducers in React</h1>
     <Provider store = {store}>
        <Test/>
     </Provider>
    </div>
  );
}

export default App;
