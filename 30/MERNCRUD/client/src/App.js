import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import PostList from './PostList';
import AddPost from './AddPost';
import EditPost from './EditPost';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <h1 style = {{backgroundColor:'black', color:'white', padding:'10px'}}>MERN stack CRUD Application</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostList />} exact/>
        <Route path='/addpost' element={<AddPost />} exact/>
        <Route path='/editpost/:postid' element={<EditPost />}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
