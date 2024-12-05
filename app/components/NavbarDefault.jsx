import React from 'react'
import Link from 'next/link'
import './components.css'
const NavbarDefault = () => {
  return (
    <nav>
        <ul>
            <li> <Link href="/home">Home</Link> </li>
            <li> <Link href="/Login">Login</Link> </li>
            <li> <Link href="/Profile">Profile</Link> </li>
        </ul>
    </nav>
  )
}

export default NavbarDefault