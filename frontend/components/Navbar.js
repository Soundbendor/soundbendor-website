import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.mainnav}>
            <ul>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/team'><li>Team</li></Link>
                <Link href='/projects'><li>Projects</li></Link>
                <Link href='/publications'><li>Publications</li></Link>
                <Link href='/news'><li>News</li></Link>
                <Link href='/apply'><li>Apply</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar