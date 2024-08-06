import React, { useContext } from 'react'
import { Moviesprovider } from './Moviescontext';

function Movielist() {
    const obj = useContext(Moviesprovider)
    const movieslist = obj.movies.map((movie)=>{
        return <div>
            <h1>
                {movie.moviename}
            </h1>
            <h1>
                Directed by {movie.moviename}
            </h1>
        </div>
    })
    return <div>
        <h1>
            Movie List
        </h1>
        {movieslist}
    </div>
}
export default Movielist;