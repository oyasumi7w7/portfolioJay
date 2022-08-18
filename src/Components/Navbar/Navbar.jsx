import React from "react"
import './Navbar.css';
import './MediaNav.css'

const Navbar = (props) => {
    return (
        <nav className='header'>
            <ui>
                {/* <li><a href="#Experience">Experience</a></li> */}
                <li><a href="#timeline">Timeline/Experience</a></li>
                <li><a href="#Skill">Skill</a></li> 
                <li><a href="#Project">Project</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1sewQ0y6QvC9vVvHSXLq_-5IO9mrqWwtE/view?usp=sharing" target="_blank">Resume</a></li>
            </ui>
        </nav>
    )
}

export default Navbar 