import React from 'react'
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import landingImage from '@/public/assets/l1.png'
import './page.css'
import curveLine from '@/public/assets/curve-line.png'
import pasta from '@/public/assets/homepage/pasta.jpeg'
import pizza from '@/public/assets/homepage/chicken pizza.png'
import soup from '@/public/assets/homepage/soup.png'
import butterMasala from '@/public/assets/homepage/butter masala.png'
import quicknEasy from '@/public/assets/homepage/quicknEasy.png'
import healthy from '@/public/assets/homepage/healthy.png'
import desserts from '@/public/assets/homepage/desserts.png'
import bbq from '@/public/assets/homepage/BBQ.png'
import vegeterian from '@/public/assets/homepage/vegeterian.png'

const page = () => {
  return (
    <div className='landing-cotainer'>
      <div className="landing-top">
        <div className="landing-search">
          <input type="text"  placeholder='search for recipes..'/>
          <CiSearch size={20} className='icon'/>
        </div>
        <div className="image-container">
          <Image src={landingImage} alt='landing-image'></Image>
        </div>

        <div className="recipe-button-container">
          <div className="span-container">
          <span>Click here to add new recipe</span>
          </div>
          <div className='curve-line'>
            <Image src={curveLine} alt='curve-line'></Image>
          </div>
          <button className='recipe-button'>ADD RECIPE</button>
        </div>
      </div>

      <landing className="landing-mid">
        
        <div className="craving-container">
          <h1 className='heading-1'>WHAT WE ARE CRAVING</h1>
          <div className="items-grid">
            <div className="item">
              <Image  src={pasta} alt=''></Image>
              <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
              <Image  src={pizza} alt=''></Image>
              <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
              <Image  src={soup} alt=''></Image>
              <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
              <Image  src={butterMasala} alt=''></Image>
              <h2>Chicken Pasta</h2>
            </div>
            
            
          </div>
        </div>
        <div className='more-container'>
          <h1 className='heading-1'>MORE RECIPE</h1>
          <div className='items'>
            <div className="item">
                <Image className='more-container-img' src={quicknEasy} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
                <Image className='more-container-img' src={healthy} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
                <Image  src={bbq} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
                <Image  src={desserts} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
                <Image  src={vegeterian} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
          </div>
        </div>
      </landing>
    </div>
  )
}

export default page