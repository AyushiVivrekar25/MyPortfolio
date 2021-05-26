// import logo from './logo.svg';
// import './App.css';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./App.scss"
import { useState } from "react";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
  const [menuOpen,setMenuOpen] =  useState(false)
  return (
    <div className="App">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>

    </div>
    </div>
  );
}

export default App;
