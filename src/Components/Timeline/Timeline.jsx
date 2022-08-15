import './Timeline.css';
import React from 'react'
const Timeline = () => {
    return (
        <div id="timeline" className='divtimeline'>
            <div className='center'>
                <h2>Timeline/Experience</h2>
            </div>
            <div className='timeline'>
                <div class="outer">
                    <div class="card">
                        <div class="info">
                            <h3 class="title">Graduated with a bachelor's degree</h3>
                            <p><span>From Rajamangala University of Technology Lanna.  </span>
                                I studied in the field of business administration related to computer information systems.
                                I have a background in programming in HTML, CSS, PHP, and MySQL from this university.
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info">
                            <h3 class="title">Junior Software Developer Boot Camp - Cohort 2</h3>
                            <p>
                                <span>From Generation Thailand.  </span>
                                After graduating, I joined this boot camp program.
                                To gain new skills and learn new things that are not studied in university such as React.js,
                                MongoDB, Node.js, Git/Github and others like Soft Skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;