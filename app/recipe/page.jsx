import React from 'react'
import Navbar from '../components/Navbar'
import './page.css'
import image from '@/public/assets/recipe.jpg'
import Image from 'next/image'
const page = () => {
  return (
    <div>
        <Navbar/>
        <section className='recipe-info-container'>
          <div className='recipe-top'>
            <div className='recipe-top-main'>
              <div className="recipe-top-left">
                <h1>CHICKEN <br/> PASTA</h1>
                <div className="numbers">
                  <div className="number">
                    <h1>8</h1>
                    <span>INGREDIENTS</span>
                  </div>
                  <div className="number">
                    <h1>15</h1>
                    <span>MINUTES</span>
                  </div>
                  <div className="number">
                    <h1>720</h1>
                    <span>CALORIES</span>
                  </div>
                </div>

                <h1 className='heading-1'>NUTRITION</h1>

              </div>
              <div className="recipe-top-right">
                  <Image src={image} alt="recipe-image"></Image>
              </div>
            </div>
            
          </div>
          <div className='recipe-circle-info'>
            <div className="circle">
              <h3>45g</h3>
              <span>PROTEIN</span>
            </div>
            <div className="circle">
              <h3>45g</h3>
              <span>PROTEIN</span>
            </div>
            <div className="circle">
              <h3>45g</h3>
              <span>PROTEIN</span>
            </div>
            <div className="circle">
              <h3>45g</h3>
              <span>PROTEIN</span>
            </div>
            <div className="circle">
              <h3>45g</h3>
              <span>PROTEIN</span>
            </div>
          </div>
        <article  className='ingredients-info'>
          <div><h1 className='heading-1'>INGREDIENTS</h1></div>
          <div>
            <ul className='recipe-info-list'>
              <li>225g fettuccine or any pasta of your choice</li>
              <li>450g boneless, skinless chicken breasts, cut into bite-sized pieces</li>
              <li>salt</li>
              <li>black pepper</li>
              <li>2 tablespoons olive oil</li>
              <li>3 cloves garlic, minced</li>
              <li>240ml heavy cream</li>
              <li>100g grated Parmesan cheese</li>
              <li>Fresh parsley, chopped (for garnish)</li>
            </ul>
          </div>
        </article>

        </section>
    </div>
  )
}

export default page