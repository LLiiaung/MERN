import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Items from './Items';
import Cart from './Cart'
import Additem from './Additem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import Footer from './Footer';
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
      <Provider store = {store}>
        <PersistGate persistor={persistor}>
        <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Items/>} exact/>
          <Route path='/additem' element = {<Additem/>} exact/>
          <Route path='/cart' element = {<Cart/>} exact/>
        </Routes>
      </BrowserRouter>
      <Footer/>
        </PersistGate>

      </Provider>
    </div>
  );
}

export default App;
