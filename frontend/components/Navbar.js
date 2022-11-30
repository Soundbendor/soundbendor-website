import React from 'react'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className='navbar sticky-top navbar-expand-md navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' href='/'>
            <img src='/db.png' alt='SoundBendor Labs' width='30' />
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'><Link href='/about' className='nav-link'>About</Link></li>
              <li className='nav-item'><Link href='/team' className='nav-link'>Team</Link></li>
              <li className='nav-item'><Link href='/projects' className='nav-link'>Projects</Link></li>
              <li className='nav-item'><Link href='/publications' className='nav-link'>Publications</Link></li>
              <li className='nav-item'><Link href='/news' className='nav-link'>News</Link></li>
              <li className='nav-item'><Link href='/apply' className='nav-link'>Apply</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

// <img src="assets/img/db.png" alt="SoundBendor Labs" width="30">
