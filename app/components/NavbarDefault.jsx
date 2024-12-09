import React from 'react'
import Link from 'next/link'
import './components.css'
const NavbarDefault = () => {
  return (
    <nav>
        <ul>
            <li> <Link href="/home">Home</Link> </li>
            <li> <Link href="/Login">Login</Link> </li>
            <li> <Link href="/signup">Signup</Link> </li>

            <li> <Link href="/profile">Profile</Link> </li>
            <li> <Link href="/recipe">Recipe info</Link> </li>
            
        </ul>
    </nav>
  )
}

export default NavbarDefault