import React from "react"; 
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



  

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  return (
    <>
      <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
    
    </>
  )
}

export default App
