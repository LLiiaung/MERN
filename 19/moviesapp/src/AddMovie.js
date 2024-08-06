import React, { useContext, useState } from 'react'
import { Moviesprovider } from './Moviescontext'
function AddMovie() {
    const [moviename,setmoviename]=useState('')
    const [director,setdirector]=useState('')
    const obj = useContext(Moviesprovider)
    function add() {
        var movie = {
            moviename:moviename,
            director:director
        }
        obj.addmovie(movie); 
    }
    return <div>
        <h1>Add Movie</h1>
        <input type = "text" placeholder='Moviename' value = {moviename} onChange={(e) => setmoviename(e.target.value)}/><br/>
        <input type = "text" placeholder='Directorname' value = {director}onChange={(e) => setdirector(e.target.value)}/><br/>
        <button onClick={add}>Add Movie</button>
    </div>
}
export default AddMovie;