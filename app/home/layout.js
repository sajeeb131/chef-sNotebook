import React from 'react'
import Navbar from '../components/NavbarMain'
const layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default layout