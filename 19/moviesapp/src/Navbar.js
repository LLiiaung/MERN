import React, { useContext } from 'react'
import { Moviesprovider } from './Moviescontext';
function Navbar() {
    const obj = useContext(Moviesprovider);
    return <div style={{backgroundColor:'green'}}>
        <h1>The total movie count: {obj.movies.length}</h1>
    </div>
}
export default Navbar;