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
                <li><a href="https://drive.google.com/file/d/1TpY4Da1wqsQU_trSxVMk3pBFyGfE_4i2/view?usp=sharing" target="_blank">Resume</a></li>
            </ui>
        </nav>
    )
}

export default Navbar 