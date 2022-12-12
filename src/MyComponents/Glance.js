import React from 'react'
import '../MyCSS/Glance.css'
// import { Alert } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { CCarousel, CCarouselItem, CCarouselCaption, CImage} from '@coreui/react'



export default function Glance(props) {
  return (
    <>
      <div className="glance">
        <h1>Glance</h1>
        <div className="glance-carousel">
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active " data-bs-interval="10000">
                <img src={props.slide1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Quad Plane</h5>
                  <p>'SnT Award for "MOST INDUSTRIALLY RELEVANT PROJECT</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={props.slide2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Composite Aircraft</h5>
                  <p>One of the finest aircraft made</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={props.slide3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Balsa</h5>
                  <p>Fabricated with Perfection</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden ">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
