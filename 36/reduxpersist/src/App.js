import Addtask from './Addtask';
import { createStore } from 'redux';
import './App.css';
import rootReducer from './reducers/rootReducer'
import Todolist from './Todolist';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
function App() {
  const persistConfig = {
    key:'root',
    storage
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return (
    <div className="App">
     <h1>Redux Persist</h1>
     <Provider store = {store}>
      <PersistGate persistor={persistor}>
        <Addtask/>
        <Todolist/>
      </PersistGate>
     </Provider>

    </div>
  );
}

export default App;
