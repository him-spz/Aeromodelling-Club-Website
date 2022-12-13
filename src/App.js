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
import balsa from './images/balsa.jpg';

//Team Photos

import Aakansha from './images/team/Aakanksha.jpg';
import Abhinaba from './images/team/Abhinaba.jpg';
import Aditya from './images/team/Aditya.jpg';
import Alka from './images/team/Alka.jpg';
import Ambuj from './images/team/Ambuj.jpg';
import Arpit from './images/team/Arpit.jpg';
import Himanshu from './images/team/Himanshu.jpg';
import Mohit from './images/team/Mohit.jpeg';
import Moin from './images/team/Moin.jpg';
import Netraj from './images/team/Netraj.jpg';
import Omkar from './images/team/Omkar.jpeg';
import Piyush from './images/team/Piyush.jpg';
import Prabuddha from './images/team/Prabuddha.png';
import Pranshu from './images/team/Pranshu.jpg';
import Pulak from './images/team/Pulak.png';
import Rahul from './images/team/Rahul.jpg';
import Rishima from './images/team/Rishima.jpg';
import Ritwik from './images/team/Ritwik.jpg';
import Sarthak from './images/team/Sarthak.jpg';
import Shrey from './images/team/Shrey.jpg';
import Shreyash from './images/team/Shreyash.jpg';
import Sujeet from './images/team/Sujeet.jpg';
import Ujjwal from './images/team/Ujjwal.jpeg';
import Vaibhav from './images/team/Vaibhav.jpg';





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
              <Project bgvideo={bgvideo} balsa={balsa} />
            </Route>
            <Route path='/activities'>
              <Activities aeroweek={aeroweek} techkriti={techkriti} summer={summer} takneek={takneek} bgvideo={bgvideo} />
            </Route>
            <Route path='/team'>
              <Team bgvideo={bgvideo} techkriti={techkriti} insta={insta} fb={fb} envelope={envelope} Aakansha={Aakansha} Abhinaba={Abhinaba} Aditya = {Aditya} Alka={Alka} Ambuj={Ambuj} Arpit={Arpit} Himanshu={Himanshu} Mohit={Mohit} Moin={Moin} Netraj={Netraj} Omkar={Omkar} Piyush={Piyush} Prabuddha={Prabuddha} Pranshu={Pranshu} Pulak={Pulak} Rahul={Rahul} Rishima={Rishima} Ritwik={Ritwik} Sarthak={Sarthak} Shrey={Shrey} Shreyash={Shreyash} Sujeet={Sujeet} Ujjwal={Ujjwal} Vaibhav={Vaibhav} />
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

