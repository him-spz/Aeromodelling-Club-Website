import React from 'react'
import '../MyCSS/Project.css'

export default function Project(props) {
  return (
    <>
      <div className="project" >
        <video autoPlay muted loop src={props.bgvideo} />
    
      <div className="event">
          <div className="event-heading">
            <h1>Our Upcoming Projects </h1>
          </div>
      </div>
      </div>
      </>
  )
}
