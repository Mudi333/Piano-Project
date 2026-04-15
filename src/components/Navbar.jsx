import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
   <nav className='navbar'>
  <span className='navbar-logo'>Claire Harmon Piano</span> 
        <div className='navbar-links'><a href="#">Home</a>
        <a href="#">Lessons</a>
        <a href="#">Contact</a> </div>
    
   </nav>
  )
}

export default Navbar