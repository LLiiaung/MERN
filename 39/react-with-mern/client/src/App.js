import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Child from './Child';
import messageReducer from './messageReducer';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {thunk} from 'redux-thunk'
function App() {
  // useEffect(()=>{
  //   axios.get('/api').then(res=>{
  //     console.log(res.data)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // },[])
  const store = createStore(messageReducer, applyMiddleware(thunk))
  return (
    <div className="App">
      <Provider store={store}>
        <Child/>
      </Provider>
    </div>
  );
}

export default App;
