import React, { useState } from 'react'
import './MediaNav.css'

const MediaNav = () => {

    return (
        <div className="topnav">

            <ul class="navbar" id="navbar">
                {/* <li><a href="#Experience">Experience</a></li> */}
                <li><a href="#timeline">Timeline/Experience</a></li>
                <li><a href="#Skill">Skill</a></li> 
                <li><a href="#Project">Project</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1sewQ0y6QvC9vVvHSXLq_-5IO9mrqWwtE/view?usp=sharing" target="_blank">Resume</a></li>
                <a class="close" href='#'>
                    <img src="https://ljc-dev.github.io/testing0/ham-close.svg" alt="close" />
                </a>
            </ul>
            <a class="hamburger" href="#navbar">
                <img src="https://ljc-dev.github.io/testing0/ham.svg" alt="menu" />
            </a>
        </div>
    )
}
export default MediaNav;