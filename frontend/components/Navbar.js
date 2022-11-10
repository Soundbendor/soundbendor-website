import React from 'react'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav class='navbar sticky-top navbar-expand-md navbar-light bg-light'>
      <div class='container-fluid'>
        <Link class='navbar-brand' href='/'><img src='/db.png' alt='SoundBendor Labs' width='30' /></Link>
        <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation'><span class='navbar-toggler-icon' /></button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <Link href='/about' class='nav-link'><li class='nav-item'>About</li></Link>
            <Link href='/team' class='nav-link'><li class='nav-item'>Team</li></Link>
            <Link href='/projects' class='nav-link'><li class='nav-item'>Projects</li></Link>
            <Link href='/publications' class='nav-link'><li class='nav-item'>Publications</li></Link>
            <Link href='/news' class='nav-link'><li class='nav-item'>News</li></Link>
            <Link href='/apply' class='nav-link'><li class='nav-item'>Apply</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// <img src="assets/img/db.png" alt="SoundBendor Labs" width="30">
