import React, { useState } from 'react'
import '../index.css'
import { Link, useLocation } from 'react-router-dom'


import LogoType from '../assets/images/mainlogo.svg'
import LogoTypeDarkMode from '../assets/images/mainlogo_darkmode.svg'


import MobileButton from './MobileButton'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {

  const {pathname} = useLocation()

  const [fix, setFix] = useState(false)

  function setFixed () {
    if (window.scrollY >= 100 ) {
      setFix(true)
    } else {
      setFix()
    }
  }


    window.addEventListener('scroll', setFixed)

  return (
    <header className={fix ? 'header fixed' : 'header'} style={{ backgroundColor:`${pathname === '/' ? "var(--color-bg)" : "var(--color-bg2)" }`}}>
      
      <div className="container">

            <Link to="/"><img className="show-light" src={LogoType} alt="logo silicon"/></Link>
            <Link to="/"><img className="show-dark" src={LogoTypeDarkMode} alt="logo silicon"/></Link>
                
            <DarkModeSwitch/>

            <MobileButton/>
      </div>

      


  </header>


  )
}

export default Header