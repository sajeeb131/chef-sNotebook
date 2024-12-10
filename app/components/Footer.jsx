import React from 'react'
import './components.css'
import Image from 'next/image'
import image from '@/public/assets/frame 4.png'
const Footer = () => {
  return (
    <footer className='relative footer-container'>
        <section className='flex flex-row items-start px-40 py-32 gap-32 footer-main'>
        <article className='footer-left'>
            <h1 className='font-semibold text-5xl mb-10'>About Us</h1>
            <p>
                At Chef's Notebook, we are passionate about empowering culinary creators. Our platform is designed to serve as a hub for chefs, home cooks, and food enthusiasts to store, share, and discover recipes with ease. Whether you’re crafting dishes for a restaurant or experimenting in your home kitchen, Chef’s Notebook helps you organize your culinary journey.
                <br />
                We combine user-friendly recipe management tools with features to calculate food costs, plan menus, and connect with like-minded food lovers. Our mission is to make cooking a seamless and creative experience for everyone, one recipe at a time.
            </p>
        </article>
        <article className='footer-right'>
            <h2 className='text-4xl mb-10'>LEARN MORE</h2>
            <ul>
                <li className='list-body'>Chef's notebook community</li>
                <li className='list-body'>feedback</li>
                <li className='list-body'>Blog</li>
                <li className='list-body'>Terms of service</li>
                <li className='list-body'>Privacy policy</li>
            </ul>
        </article>
        </section>
        
        <Image  className='absolute bottom-0 self-center footer-image' src={image} alt='footer-image'/>
    </footer>
  )
}

export default Footer