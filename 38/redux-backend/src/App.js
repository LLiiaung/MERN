import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import demoReducer from './demoReducer';
import {thunk} from 'redux-thunk'
import getdatafromapi from './demoActions';
function App() {
  const store = createStore(demoReducer, applyMiddleware(thunk))
  const dispatch = useDispatch()
  const demored = useSelector(state => state)
  const postlist = demored.posts.map(post=>{
    return <h1>{post.title}</h1>
  }) 
  function getdata() {
    dispatch(getdatafromapi())
  }
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>Redux for fullstack application</h1>
        <button onClick = {getdata}>Get Data from API</button>
        {postlist}
      </div>
    </Provider>

  );
}

export default App;
