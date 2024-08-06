import React,{useContext}  from 'react'
import {Moviesprovider}  from './Moviescontext';
function A() {
    const obj=useContext(Moviesprovider)
    function change() {
        obj.changemovie('Avatar')
    }
    return <div style={{backgroundColor:'red'}}>
        <h1>This is A</h1>
        <h1>director is {obj.director}</h1>
        <button style={{margin:'10px'}} onClick={change}>Change movie name</button>
    </div>
}
export default A;