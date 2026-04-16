import React from 'react'
import "./Navbar.css"

function Navbar({ page, setPage }) {
  return (
    <nav className='navbar'>
      <span className='navbar-logo'>Claire Harmon Piano</span>
      <div className='navbar-links'>
        <a href="#" className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Home</a>
        <a href="#" className={page === 'lessons' ? 'active' : ''} onClick={() => setPage('lessons')}>Lessons</a>
        <a href="#" className={page === 'contact' ? 'active' : ''} onClick={() => setPage('contact')}>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar