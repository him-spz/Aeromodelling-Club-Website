import React from 'react'
import '../MyCSS/Header.css'
import { useState } from 'react';
import  { Link } from "react-router-dom";
export default function Header(props) {
  const [navBar,setNavbar] = useState(false);

  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll',changeBackground);
  return (
    <>
    <nav className={navBar ? 'navBar active' : 'navBar'}>
      <div className="logo">
        <img id='iitk-logo' src={props.snt} alt="IITK" />
        <img id='aero-logo' src={props.aero} alt="" />
      </div>
      <div className="menu">
        <ul className="menu-option">
          <li className="nav-item"><Link to='/' className='link'>Home</Link> </li>
          <li className="nav-item"><Link to='/projects' className='link'>Projects</Link></li>
          <li className="nav-item"><Link to='/activities' className='link'>Activities</Link></li>
          <li className="nav-item"><Link to='/team' className='link'>Team</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}
