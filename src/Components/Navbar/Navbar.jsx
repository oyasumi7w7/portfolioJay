import React from "react"
import './Navbar.css';

const Navbar = (props) => {
    return (
        <nav className='header'>
            <ui>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Resume</a></li>
            </ui>
        </nav>
    )
}

export default Navbar 