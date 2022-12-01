import React from 'react'
import '../MyCSS/Footer.css'
export default function Footer(props) {
  return (
    <>
    <div className="footer">
      <div className='text-center'>
        <div className="social-media">
          <img src={props.insta} alt="" />
          <img src={props.fb} alt="" />
          <img src={props.linkedin} alt="" />
        </div>
        <h3>AEROMODELLING CLUB, IITK</h3>
      </div>
      <div className='developer'>DEVELOPED BY : XXX</div>
    </div>
    
    </>
  )
}
