"use client"

import React, { useState } from 'react'
import './login.css'

import Image from 'next/image'
import image from '@/public/assets/login-image.jpg'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
const page = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const handleSubmit = async(e) =>{
    e.preventDefault();
      try{
          const response = await fetch('api/users/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
          });
          if(response.ok){
            router.push('/');
          }else{
            const data = await response.json();
            setError(data.error || 'login failed')
            
          }

          
      }catch(error){
        console.error('Error during login! Please try again later!', error)
      }
  }
  return (
    <div className='login-container'>
        <section className='login-left'>
          <h1 className='heading-1'>LOG IN</h1>
        <form onSubmit={handleSubmit}>

            <input
            className='input-1-login'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            />
            <input
            className='input-1-login'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            />
            <button className="btn-submit" type="submit">LOGIN</button>
        </form>
        <Link href="/signup" className="">Sign up</Link>
        </section>
        <section className="login-right">
            <Image src={image} alt='login-image' />
        </section>
        
    </div>
  )
}

export default page