import React from 'react'
import '../MyCSS/Footer.css'
export default function Footer(props) {
  return (
    <>
    <div className="footer">
      <div className='text-center'>
        <div className="social-media">
          <a href="https://www.instagram.com/aero_club_iitk/" target='blank'><img src={props.insta} alt="" /></a>
          <a href="https://www.facebook.com/aeromodellingclubiitk" target='blank'><img src={props.fb} alt="" /></a>
          <a href="https://www.linkedin.com/in/aeromodelling-club-6a3b2a190/" target="blank"><img src={props.linkedin} alt="" /></a>
          <a href="https://discord.gg/UqbdRCnvp3" target="blank"><img src={props.discord} alt="" /></a>
          <a href="https://www.youtube.com/@AeromodellingClubIITK" target="blank"><img src={props.youtube} alt="" /></a>
          <a href="http://aero.sntiitk.in/" target="blank"><img src={props.globe} alt="" /></a>
        </div>
        
      </div>
      <div className="footer-content">
        <h3>AEROMODELLING CLUB, IITK</h3>
        <div className='developer'>DEVELOPED BY : XXX</div>
      </div>
      
    </div>
    
    </>
  )
}
