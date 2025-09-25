import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Protfolio from './protfolio/navbar'
import Navbar from './protfolio/navbar'
import FloatingBackground from "./Hero/galaxy"
import { Route, Routes } from 'react-router-dom'
import Nav from './Navbar/Nav'
import Aboutpage from './about/about'
import Education from './education/eduction'
import Projects from './projects/projects'
import Skills from './skills/skills'
import Skillscore from './score/score'
import Certifications from './certificate/certificate'
import Contact from './contact/contact'
import Allprojects from './projects/allprojects'
import Allcertificates from './certificate/allcertificates' 
function App() {

  return (
    <>
   {/* <Navbar/> 
    <FloatingBackground/> 
  <Aboutpage/> 
    <Nav/>
    <Education/>
    <Projects/>
    <Skills/>
    <Skillscore/>
    <Certifications/>
    <Contact/>  */}

    <Routes>
      <Route index element={<FloatingBackground/>}/>
      <Route path="/About" element={<Aboutpage/>}/>
      <Route path="/Education" element={<Education/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/Certifications" element={<Certifications/>}/> 
              <Route path="/Allprojects" element={<Allprojects/>} />
              <Route path="/Allcertificates" element={<Allcertificates/>} />
              <Route path="/Contact" element={<Contact/>} />

    </Routes>
    </>
  )
}

export default App
