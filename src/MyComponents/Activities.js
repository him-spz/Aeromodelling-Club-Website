import React from 'react'
import '../MyCSS/Activities.css'
export default function Activities(props) {
  return (
    <>
      <div className="activities" >
        <video autoPlay muted loop src={props.bgvideo} />
        <div className="event">
          <div className="event-heading">
            <h1>Our Events</h1>
          </div>
          <div className="events-container">
            <div className="event-card">
              <div className="left-ac">
                <img src={props.techkriti} alt="" />
              </div>
              <div className="right">
                <h4>Techkriti</h4>
              </div>
            </div>
            <div className="event-card">
              <div className="left-ac">
                <img src={props.summer} alt="" />
              </div>
              <div className="right">
                <h4>Summer Projects</h4>
              </div>
            </div>
            <div className="event-card">
              <div className="left-ac">
                <img src={props.aeroweek} alt="" />
              </div>
              <div className="right">
                <h4>Aeroweek</h4>
              </div>
            </div>
            <div className="event-card">
              <div className="left-ac">
                <img src={props.takneek} alt="" />
              </div>
              <div className="right">
                <h4>Takneek</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
