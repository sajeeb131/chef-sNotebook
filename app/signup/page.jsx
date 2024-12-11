'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import image from '@/public/assets/login-image.jpg'
import './signup.css'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      try {
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        });
        if (response.ok) {
          router.push('/login');
        } else {
          const data = await response.json();
          setError(data.error || 'Signup failed');
        }
      } catch (error) {
        console.error('Error during signup:', error);
        setError('An unexpected error occurred');
      }
    };

  return (
    <div className='signup-container'>
        <section className="signup-left">
        <h1 className='heading-1'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <input
            className='input-1-login'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            />
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
            <button className="btn-submit" type="submit">Sign Up</button>
        </form>
            
        </section>
        <section className='signup-right'>
            <Image src={image} alt='signup-image'/>
        </section>
      
    </div>
  );
}

export default Signup;
