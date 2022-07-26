import './Contact.css'
import React from 'react'
const Contact = () => {
    return (
        <div id='Contact' className='contact'>
            <div className='content'>
                <h3>Contact</h3>
                <p>San Kamphaeng, Chiang Mai 50130</p>
                <div className='email-content'>
                    <div className='rows'>
                        <div className='cols'>
                            <a href="mailto:jay.alongkorn.th@gmail.com"><img src='../iconmonstr-email-10.svg' />
                            <p>Email : jay.alongkorn.th@gmail.com</p></a>
                        </div>
                        <div  className='cols'>
                            <img src='../Ic_phone_android_48px.svg' />
                            <p>Phone : 061-685-5982</p>
                        </div>
                        <div  className='cols'>
                            <a href="https://github.com/oyasumi7w7" target="_blank"><img src='../imgs/Octicons-mark-github.svg' />
                            <p>My GitHub</p></a>
                        </div>
                        <div  className='cols'>
                            <a href="https://www.linkedin.com/in/alongkorn-thepwong-7a7221246/" target="_blank"><img src='../imgs/61109.png' />
                            <p>My LinkIn</p></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact