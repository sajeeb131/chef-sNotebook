import React from 'react'
import Image from 'next/image'
import "./components.css"
const ShowItem = ({heading, items}) => {
  return (
    <div className="item-container">
        <h1 className='heading-1 '>{heading}</h1>
        <div className="flex flex-row items-center gap-6 items-grid">
          {items.map((item, index) => (
            <div className="flex flex-col items-center  item" key={index}>
              <Image  src={item.image} alt='item-image'></Image>
              <h2 className='font-medium'>{item.name}</h2>
            </div>
          ))}            
        </div>
      </div>
  )
}

export default ShowItem;