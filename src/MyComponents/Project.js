import React from 'react'
import '../MyCSS/Project.css'

export default function Project(props) {
  return (
    <>
      
      <div className="project" >
        <video autoPlay muted loop src={props.bgvideo} />
        <div className="event-heading">
          <h1>Our Projects </h1>
        </div>
        <div className="achievement-card">
          <div className="left-achievement">
            <img className='image__img' src={props.techkriti} alt="" />
            <div id='image__overlay__secy' class="image__overlay ">
              <p>A RC plane made of balsa wood with the first time use of IC Engine.</p>
              <p>The project is made in summers 2022.</p>
            </div>
          </div>
          <div className="right">
            <h4>Balsa-Wood Plane</h4>

          </div>
        </div>
      </div>

    </>
  )
}
