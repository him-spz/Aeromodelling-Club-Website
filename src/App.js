import './App.css';
import Header from './MyComponents/Header'
import Homepage from './MyComponents/Homepage';
import Glance from './MyComponents/Glance';
import Project from './MyComponents/Project';
import Activities from './MyComponents/Activities';
import Team from './MyComponents/Team';
import Footer from './MyComponents/Footer';
// import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
      <Route exact path='/' render = {()=>{
        return(
          <>
          <Homepage/>
          <Glance/>
          </>
        )
      }}>
      </Route>
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
    <Footer/>
    </>
  );
}

export default App;

