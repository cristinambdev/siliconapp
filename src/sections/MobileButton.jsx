

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ToggleButton from '../assets/images/Button - Toggle navigation.svg'
import ToggleButtonDarkMode from '../assets/images/Button - Toggle navigation DarkMode.svg'
import UserIcon from '../assets/images/icon_signin.svg'

const MobileButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  }



  return (
    <>
      <button
        className="menu-btn"
        onClick={toggleMenu}
        aria-controls="main-menu"
        aria-expanded={isMenuOpen} //CHAT GPT suggestion to make it work
        aria-label="toggle navigation"
      >
        <img className="icon-menu show-light" src={ToggleButton} alt="icon" />
        <img className="icon-menu show-dark" src={ToggleButtonDarkMode} alt="icon" />

      </button>

      <ul className={`main-menu ${isMenuOpen ? 'show' : 'hidden'}`}>

        <li className='nav-links'>
          <Link className="nav-link" to="/"> Features </Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>

        <li>
          <Link className="btn btn-primary" to="/">
            <img className="user-icon" src={UserIcon} alt="icon person" />
            <p>Sign in / up</p>
          </Link>
        </li>

      </ul>

    </>
  );
};

export default MobileButton;
// const MobileButton = () => {

//   const [showMenu, setShowMenu] = useState(false)

//   const toggleMenu = () => {
//     setShowMenu(!showMenu)
//   }

//   let menu

//   if(showMenu){
//     menu =  <ul id="main-menu" className={`main-menu ${showMenu ? 'show' : ''}`}>
    
//     <li>

//     <nav className="navbar">
//           <NavLink className="nav-link" to="/">Features</NavLink>
//     </nav>    
    
//     </li>

//     <li>
//       <Link className="btn btn-primary" to="/">
//               <img className="user-icon" src={UserIcon} alt="icon person"/>
//               <p>Sign in / up</p>
//       </Link>
//     </li>
//   </ul >

//   }


//   return (
//     <>
//      <button className={`menu-btn ${showMenu ? 'active' : ''}`} onClick={toggleMenu} aria-controls='main-menu' aria-label="toggle naviagation">
        
//          <img className="icon-menu" src={ToggleButton} alt="icon"/>                 
      
//     </button>
    
//    { menu }
   
//     </>
//   )
// }

// export default MobileButton