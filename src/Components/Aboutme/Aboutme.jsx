import './Aboutme.css';
import React from 'react'

const Aboutme = () => {
    return (
        <div className='Aboutme'>
            <div className='me-left'>
                <img src="280193774_581845973127898_5274279538636443273_n.jpg" />
                <div className='link-me'>
                    <a href="https://github.com/oyasumi7w7" target="_blank"><img src='../imgs/Octicons-mark-github.svg' /></a>
                    <a href="https://www.linkedin.com/in/alongkorn-thepwong-7a7221246/" target="_blank"><img src='../imgs/61109.png' /></a>
                </div>
                
            </div>
            <div className='me-right'>
                <div className='flex-me'>
                    <h4>Hello!!</h4>
                    <a href="https://github.com/oyasumi7w7" target="_blank"><img src='../imgs/Octicons-mark-github.svg' /></a>
                    <a href="https://www.linkedin.com/in/alongkorn-thepwong-7a7221246/" target="_blank"><img src='../imgs/61109.png' /></a>
                </div>

                <h2>I'm Alongkorn Thepwong</h2>
                <p>
                    You can call me Jay. I'm a fresh graduate and have spent some time on my own,
                     later participating in the Software Junior Developer from Generation.
                      I'm interested in working on the Backend Developer. 
                      I'm trying to learn and practice new or popular programming languages like Javascript, And React.
                </p>
            </div>

        </div>
    )
}

export default Aboutme;