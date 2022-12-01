import React from 'react'
import '../MyCSS/Homepage.css'
export default function Homepage(props) {
  return (
    <div className='homepage' style={{ 
      backgroundImage: `url(${props.bg})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      height: 800 
    }}>
      <div className="content">
        <h1>WELCOME TO AEROMODELLING CLUB, IIT KANPUR</h1>
        <h3>DESIGN, BUILD, FLY...</h3>
        <h5>SINCE 2003</h5>
      </div>
    </div>
  )
}
