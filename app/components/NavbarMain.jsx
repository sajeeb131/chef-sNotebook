import React from 'react'
import './components.css'
import logo from '@/public/assets/logo-png 1.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='navbarmain-container'>
        <div className="navbarmain-logo">
          <Image src={logo} alt='logo-image' />
        </div>
        <div className='navbarmain-links'>
            <span>Login</span>
            <span>Sign up</span>
        </div>

    </nav>
  )
}

export default Navbar