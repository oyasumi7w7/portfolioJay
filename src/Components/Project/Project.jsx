import './Project.css'
import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Project = () => {


    return (

        <div id="Project" className='project'>
            <h3>Project</h3>
            <div className='container-fluid' >
                <OwlCarousel items={1}
                    className="owl-theme"
                    loop
                    nav
                    margin={8} >
                    <div className='card'>
                        <h1>CM Busking</h1>
                        <div className='flex-card'>
                            <div className='pic'>
                                <a href="https://chiangmai-busking-frontend.vercel.app/" target="_blank">
                                    <img className="img" src={'../imgs/cm.busking.PNG'} /></a>
                            </div>
                            <div className="tool">
                                <div className='col-img'>
                                    <img src="../imgs/HTML5_logo_and_wordmark.svg" />
                                    <img src="../imgs/React-icon.svg" />
                                    <img src="../imgs/CSS3_logo_and_wordmark.svg" />
                                    <img src="../imgs/MongoDB_Logo.svg" />
                                </div>
                                {/* <div className='github'>
                                    <a href="https://github.com/oyasumi7w7/fit2bFrontEnd" target="_blank">
                                        <img src="../imgs/Octicons-mark-github.svg" /></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <h1>Jamming</h1>
                        <div className='flex-card'>
                            <div className='pic'>
                                <a href="http://jay-jamming-learn.surge.sh/" target="_blank"><img className="img" src={'../imgs/jamming.png'} /></a>
                            </div>
                            <div className="tool">
                                <div className='col-img'>
                                    <img src="../imgs/HTML5_logo_and_wordmark.svg" />
                                    <img src="../imgs/React-icon.svg" />
                                    <img src="../imgs/CSS3_logo_and_wordmark.svg" />
                                </div>
                                <div className='github'>
                                    <a href="https://github.com/oyasumi7w7/oyasumi.7w7.github.io-my-jamming" target="_blank">
                                        <img src="../imgs/Octicons-mark-github.svg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <h1>Monnymon Shop</h1>
                        <div className='flex-card'>
                            <div className='pic'>
                                <img className="img" src={'../imgs/monnymon.png'} />
                            </div>
                            <div className="tool">
                                <div className='col-img'>
                                    <img src="../imgs/HTML5_logo_and_wordmark.svg" />
                                    <img src="../imgs/PHP-logo.svg" />
                                    <img src="../imgs/CSS3_logo_and_wordmark.svg" />
                                    <img src="../imgs/Javascript_badge.svg" />
                                    <img src="../imgs/Database-mysql.svg" />
                                </div>
                                <div className='github'>
                                    <a href="https://github.com/oyasumi7w7/monnymon" target="_blank">
                                        <img src="../imgs/Octicons-mark-github.svg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <h1>Fit2b</h1>
                        <div className='flex-card'>
                            <div className='pic'>
                                <a href="https://fit2b-front-end.vercel.app/" target="_blank">
                                    <img className="img" src={'../imgs/2bfit.png'} /></a>
                            </div>
                            <div className="tool">
                                <div className='col-img'>
                                    <img src="../imgs/HTML5_logo_and_wordmark.svg" />
                                    <img src="../imgs/React-icon.svg" />
                                    <img src="../imgs/CSS3_logo_and_wordmark.svg" />
                                    <img src="../imgs/MongoDB_Logo.svg" />
                                </div>
                                <div className='github'>
                                    <a href="https://github.com/oyasumi7w7/fit2bFrontEnd" target="_blank">
                                        <img src="../imgs/Octicons-mark-github.svg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div><img className="img" src={'assets/img/img3.jpg'} /></div>
                    <div><img className="img" src={'assets/img/img5.jpg'} /></div>
                    <div><img className="img" src={'assets/img/img6.jpg'} /></div>
                    <div><img className="img" src={'assets/img/img7.jpg'} /></div> */}

                </OwlCarousel>
            </div>
        </div>
    )
}

export default Project