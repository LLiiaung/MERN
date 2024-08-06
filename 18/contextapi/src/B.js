import React,{useContext} from 'react'
import {Moviesprovider}  from './Moviescontext';
function B() {
    const obj=useContext(Moviesprovider)
    function change() {
        obj.changedirector('James')
    }
    return <div style={{backgroundColor:'blue'}}>
        <h1>This is B</h1>
        <h1>name is {obj.movie}</h1>
        <button style={{margin:'10px'}} onClick={change}>Change director name</button>
    </div>
}
export default B;