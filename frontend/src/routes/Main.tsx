import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import NavbarLogin from '../components/NavbarLogin'
// import NavbarLogout from '../components/NavbarLogout'

export const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {/* {isLoggedIn ? <NavbarLogin /> : <NavbarLogout />} */}
      <NavbarLogin />
      <div>Main</div>
    </div>
  )
}
