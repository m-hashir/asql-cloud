import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='logo'>
                <h3>AgensSQL Cloud</h3>
            </div>
            <div>
                <ul className="links">
                    <li>Home</li>
                    <li>Try It</li>
                    <li><a href='#'>Contact Us</a></li>
                    <li><Link to='/login'>
                        <button className='navbar-btn'>Login</button>
                    </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar