import React from 'react'
import './components.css'
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Image from 'next/image'
import logo from '@/public/assets/logo-png 1.png'
const Navbar = () => {
  return (
    <nav className='navbarmain-container'>
        <div className="navbarmain-logo">
          <Image src={logo} alt='logo-image' />
        </div>
        <div className='navbarmain-links'>
            <CgProfile size={54}/>
            <IoIosNotificationsOutline size={54}/>
            <FaPlus size={54}/>
        </div>

    </nav>
  )
}

export default Navbar