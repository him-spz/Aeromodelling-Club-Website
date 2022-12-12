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
import snt from './images/snt.png';
import aero from './images/Aero-logo.png';
import bg from './images/club-room.jpg';
import bg2 from './images/club-room-2.jpg';
import insta from './images/square-instagram.svg';
import fb from './images/square-facebook.svg';
import linkedin from './images/linkedin.svg';
import discord from './images/discord.png';
import youtube from './images/youtube.png';
import globe from './images/globe.png';
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
        <div>
          <Header iitk={iitk} snt={snt} aero={aero} />
          <Switch>
            <Route exact path='/'>
              <Homepage bg={bg} bg2={bg2} bgvideo={bgvideo} />
              <About bgvideo={bgvideo} />
              <Glance slide1={slide1} slide2={slide2} slide3={slide3} />
            </Route>
            <Route path='/projects'>
              <Project bgvideo={bgvideo} techkriti={techkriti} />
            </Route>
            <Route path='/activities'>
              <Activities aeroweek={aeroweek} techkriti={techkriti} summer={summer} takneek={takneek} bgvideo={bgvideo} />
            </Route>
            <Route path='/team'>
              <Team bgvideo={bgvideo} techkriti={techkriti} insta={insta} fb={fb} envelope={envelope} />
            </Route>
          </Switch>
          </div>
          <Footer insta={insta} fb={fb} linkedin={linkedin} discord={discord} youtube={youtube} globe={globe} />
        
        {/* <Footer insta={insta} fb={fb} linkedin={linkedin}/> */}
      </Router>
    </>
  );
}

export default App;

