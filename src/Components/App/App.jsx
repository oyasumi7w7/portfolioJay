import { useState } from 'react'
import React from 'react'
import reactLogo from '../../assets/react.svg'
import './App.css'
import Navbar from '../Navbar/Navbar'
import Cloud from '../Cloud/Cloud'
import Aboutme from '../Aboutme/Aboutme'
import MediaNav from '../Navbar/MediaNav'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Timeline from '../Timeline/Timeline'
import Mountain from '../Background/Mountain/Mountain'

const App = () => {

  return (
    <div className="App">
      {/* <h1>Ja<span className="highlight">mmm</span>ing</h1> */}
      <div className='top'>
        <Navbar />
        <MediaNav />
      </div>
      <div className='Cloud'>
        <Cloud />
        <Aboutme />
      </div>

      <div className='maincontent'>
        <Timeline />
        <Skills /> 
      </div>
      <div className='showcontent'>
        <Project />
      </div>
      <Mountain />
      <div className='footer'>
        <Contact />
      </div>
      <a href="#"><button className='backTop'><img src="../iconmonstr-caret-up-circle-lined.svg" /></button></a>
    </div>
  )

}

export default App
