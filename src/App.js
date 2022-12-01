import './App.css';
import Header from './MyComponents/Header'
import Homepage from './MyComponents/Homepage';
import Glance from './MyComponents/Glance';
import Project from './MyComponents/Project';
import Activities from './MyComponents/Activities';
import Team from './MyComponents/Team';
import Footer from './MyComponents/Footer';
import iitk from './images/iitk-logo.png';
import aero from './images/Aero-logo.png';
import bg from './images/club-room.jpg';
import insta from './images/square-instagram.svg';
import fb from './images/square-facebook.svg';
import linkedin from './images/linkedin.svg';
import slide1 from './images/special-menu-1.jpeg';
import slide2 from './images/special-menu-2.jpg';
import slide3 from './images/special-menu-3.jpg';



// import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Header iitk={iitk} aero={aero}/>
    <Homepage bg={bg}/>
    <Glance slide1={slide1} slide2={slide2} slide3={slide3}/>
    <Router>
      <Routes>
      {/* <Route exact path='/' render = {()=>{
        return(
          <>
          
          
          </>
        )
      }}>
      </Route> */}
      <Route exact path='/project' render = {()=>{
        return(
          <>
          <Project/>
          </>
        )
      }}>
      </Route>
      <Route exact path='/activities' render = {()=>{
        return(
          <>
          <Activities/>
          </>
        )
      }}>
      </Route>
      <Route exact path='/team' render = {()=>{
        return(
          <>
          <Team/>
          </>
        )
      }}>
      </Route>
      </Routes>
      </Router>
    <Footer insta={insta} fb={fb} linkedin={linkedin}/>
    </>
  );
}

export default App;

