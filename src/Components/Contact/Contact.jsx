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
                            <img src='../iconmonstr-email-10.svg' />
                            <a href="mailto:jay.alongkorn.th@gmail.com"><p>Email : jay.alongkorn.th@gmail.com</p></a>
                        </div>
                        <div  className='cols'>
                            <img src='../Ic_phone_android_48px.svg' />
                            <p>Phone : 061-685-5982</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact