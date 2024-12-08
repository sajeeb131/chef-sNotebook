import React from 'react'
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import landingImage from '@/public/assets/l1.png'
import './page.css'
import curveLine from '@/public/assets/curve-line.png'
import foodImage from '@/public/assets/pasta.jpeg'

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
              <Image  src={foodImage} alt=''></Image>
              <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
              <Image  src={foodImage} alt=''></Image>
              <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
              <Image  src={foodImage} alt=''></Image>
              <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
              <Image  src={foodImage} alt=''></Image>
              <h2>Chicken Pasta</h2>
            </div>
            
            
          </div>
        </div>
        <div className='more-container'>
          <h1 className='heading-1'>MORE RECIPE</h1>
          <div className='items'>
            <div className="item">
                <Image  src={foodImage} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
                <Image  src={foodImage} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
                <Image  src={foodImage} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
                <Image  src={foodImage} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
            <div className="item">
                <Image  src={foodImage} alt=''></Image>
                <h2>Chicken Pasta</h2>
            </div>
          </div>
        </div>
      </landing>
    </div>
  )
}

export default page