import './App.css';
import Header from './MyComponents/Header'
import Homepage from './MyComponents/Homepage';
import About from './MyComponents/About';
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
import envelope from './images/envelope-solid.svg';
import slide1 from './images/special-menu-1.jpeg';
import slide2 from './images/special-menu-2.jpg';
import slide3 from './images/special-menu-3.jpg';
import aeroweek from './images/Aeroweek.jpg';
import techkriti from './images/techkriti.jpeg';
import takneek from './images/Takneek.jpg';
import summer from './images/Summer-project.png';
import bgvideo from './images/team-bg.mp4';


// import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Header iitk={iitk} aero={aero}/>
    <Homepage bg={bg}/>
    <About/>
    <Glance slide1={slide1} slide2={slide2} slide3={slide3}/>
    <Project/>
    <Activities aeroweek={aeroweek} techkriti={techkriti} summer={summer} takneek={takneek} bgvideo={bgvideo}/>
    <Team bgvideo={bgvideo} techkriti={techkriti} insta={insta} fb={fb} envelope={envelope}/>
    <Footer insta={insta} fb={fb} linkedin={linkedin}/> */}
    <Router>
      <Header iitk={iitk} aero={aero}/>
      <Switch>
        <Route exact path='/'>
          <Homepage bg={bg}/>
          <About/>
          <Glance slide1={slide1} slide2={slide2} slide3={slide3}/>
          <Footer insta={insta} fb={fb} linkedin={linkedin}/>
        </Route>
        <Route path='/projects'>
          <Project/>
        </Route>
        <Route path='/activities'>
          <Activities aeroweek={aeroweek} techkriti={techkriti} summer={summer} takneek={takneek} bgvideo={bgvideo}/>
        </Route>
        <Route path='/team'>
          <Team bgvideo={bgvideo} techkriti={techkriti} insta={insta} fb={fb} envelope={envelope}/>
        </Route>
      </Switch>
      {/* <Footer insta={insta} fb={fb} linkedin={linkedin}/> */}
    </Router>
    </>
  );
}

export default App;

