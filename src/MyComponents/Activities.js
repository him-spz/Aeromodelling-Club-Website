import React from 'react'
import '../MyCSS/Activities.css'
export default function Activities(props) {
  return (
    <>
      <div className="activities">
        <video autoPlay muted loop src={props.bgvideo} />

        <div className="activities-container">
          <div className="event">
            <div className="event-heading">
              <h1>Our Events</h1>
            </div>
            <div className="event-container">
              <div className="event-card">
                <div className="left">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div class="image__overlay ">
                    
                  </div>
                </div>
                <div className="right">
                  <h4>techkriti</h4>
                  
                </div>
              </div>
              <div className="event-card">
                <div className="left">
                  <img className='image__img' src={props.aeroweek} alt="" />
                  <div class="image__overlay ">
                    
                  </div>
                </div>
                <div className="right">
                  <h4>Aeroweek </h4>
                  
                </div>
              </div>
              <div className="event-card">
                <div className="left">
                  <img className='image__img' src={props.takneek} alt="" />+++
                  <div class="image__overlay ">
                    
                  </div>
                </div>
                <div className="right">
                  <h4>Takneek</h4>
                  
                </div>
              </div>
              <div className="event-card">
                <div className="left">
                  <img className='image__img' src={props.summer} alt="" />
                  <div class="image__overlay ">
                   
                  </div>
                </div>
                <div className="right">
                  <h4>Summer Project</h4>
                  
                </div>
              </div>

            </div>
          </div>
          <div className="achievement">
            <div className="achievement-heading">
              <h1>Our Achievements</h1>
            </div>
            <div className="achievement-container">
              <div className="achievement-card">
                <div className="left-achievement">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    
                  </div>
                </div>
                <div className="right">
                  <h4>techkriti</h4>
                 
                </div>
              </div>
              <div className="achievement-card">
                <div className="left-achievement">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    
                  </div>
                </div>
                <div className="right">
                  <h4>Techfest</h4>
                  
                </div>
              </div>
              <div className="achievement-card">
                <div className="left-achievement">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    
                  </div>
                </div>
                <div className="right">
                  <h4>projects </h4>
                  
                </div>
              </div>
              <div className="achievement-card">
                <div className="left-achievement">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    
                  </div>
                </div>
                <div className="right">
                  <h4>Inter-IIT</h4>
                  
                </div>
              </div>
              
             
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}









      
      


      
 