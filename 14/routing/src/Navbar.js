import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return <div>
        <ul>
            <Link to='/Home'>
                <li>Home</li>
            </Link>
            <Link to='/contactus'>
                <li>Contact Us</li>
            </Link>
            <Link to='/service'>
                <li>Service</li>
            </Link>
        </ul>
    </div>
}
export default Navbar;