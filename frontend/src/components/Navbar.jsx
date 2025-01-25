import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="Navbar">
        <div className="Navbar-Brand">
            <Link to='/'>Movie App</Link>
        </div>
        <div className="Navbar-Links">
            <Link to='/' className="Navbar-Link">Home</Link>
            <Link to='/favourites'  className="Navbar-Link">Favourites</Link>
        </div>
    </nav>
  )
}

export default  Navbar;