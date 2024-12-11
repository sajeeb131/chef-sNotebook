import React from 'react'
import './login.css'
import Image from 'next/image'
import image from '@/public/assets/login-image.jpg'
const page = () => {
  return (
    <div className='login-container'>
        <section className='login-left'>
            <h1>LOG IN</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button className="login-button">LOGIN</button>
            <h5>Sign up</h5>
        </section>
        <section className="login-right">
            <Image src={image} alt='login-image' />
        </section>
        
    </div>
  )
}

export default page