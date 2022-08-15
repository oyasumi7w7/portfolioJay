import { useState } from 'react';
import './Skills.css';
import React from 'react'
const Skills = () => {
    const [img, setImg] = useState([
        { imgName: 'CSS3_logo_and_wordmark' },
        { imgName: 'Database-mysql' },
        { imgName: 'HTML5_logo_and_wordmark' },
        { imgName: 'Javascript_badge' },
        { imgName: 'MongoDB_Logo' },
        { imgName: 'Octicons-mark-github' },
        { imgName: 'PHP-logo' },
        { imgName: 'React-icon' }])

    console.log(img[3])
    const images = img.map((image) => <div className='child'> <img src={`../imgs/${image.imgName}.svg`} /></div>)

    return (
        <div id='Skill' className='skill'>
            <h3>Skills</h3>
            <div className='skillIcon'>
                {images}
            </div>
        </div>
    )
}
export default Skills