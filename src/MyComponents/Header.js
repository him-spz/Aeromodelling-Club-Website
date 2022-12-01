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
        <img id='iitk-logo' src={props.iitk} alt="IITK" />
        <img id='aero-logo' src={props.aero} alt="" />
      </div>
      <div className="menu">
        <ul className="menu-option">
          <li className="nav-item">Home</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Activities</li>
          <li className="nav-item">Team</li>
        </ul>
      </div>
    </nav>
    </>
  )
}
