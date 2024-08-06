import React,{useState} from 'react'
import './Navbar.css'
import {useNavigate } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Navbar() {
    const[username, setusername]=useState("")
    const[password, setpassword]=useState("")
    const navigate =useNavigate()
    function logout() {
        localStorage.removeItem('loggedin')
        navigate('/')
    }
    function login(){
        var users=JSON.parse(localStorage.getItem('users'))
        var i = 0
        for (var user of users) {
            if(user.username==username && user.password==password) {
                i++;
            }
        }
        if (i==1) {
            alert('Login successfull')
            tolocalSrage.setItem('loggedin','loggedin')
            navigate('/dashboard')
            window.location.reload(true)
        } else {
            alert('Invalid login')
        }
    }
    return <div>
        <div className='row nav'>
            <div className='col-md-6'>
                <h1>Facebook</h1>
            </div>
            <div className='col-md-6'>
                {
                    (()=>{
                        if (localStorage.getItem('loggedin')) {
                            return <button onClick={logout}>LOGOUT</button>
                        } else {
                            return <div>
                                <input type = 'text' placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                                <input type = 'password' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                                <button onClick={login}>Login</button>
                            </div>       
                        }
                    })()
                }

            </div>
        </div>
    </div>
}
export default Navbar;