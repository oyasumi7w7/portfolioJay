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
                        <h1>Jamming</h1>
                        <div className='flex-card'>
                            <div className='pic'>
                                <a href="http://jay-jamming-learn.surge.sh/" target="_blank"><img className="img" src={'../../../public/imgs/jamming.png'} /></a>
                            </div>
                            <div className="tool">
                                <div className='col-img'>
                                <img src="../../../public/imgs/HTML5_logo_and_wordmark.svg" />
                                    <img src="../../../public/imgs/React-icon.svg" />
                                    <img src="../../../public/imgs/CSS3_logo_and_wordmark.svg" />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <h1>2bfit</h1>
                        <div className='flex-card'>
                            <div className='pic'>
                                <img className="img" src={'../../../public/imgs/2bfit.png'} />
                            </div>
                            <div className="tool">
                                <div className='col-img'>
                                <img src="../../../public/imgs/HTML5_logo_and_wordmark.svg" />
                                    <img src="../../../public/imgs/React-icon.svg" />
                                    <img src="../../../public/imgs/CSS3_logo_and_wordmark.svg" />
                                    <img src="../../../public/imgs/MongoDB_Logo.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <h1>Monnymon Shop</h1>
                        <div className='flex-card'>
                            <div className='pic'>
                                <img className="img" src={'../../../public/imgs/monnymon.png'} />
                            </div>
                            <div className="tool">
                                <div className='col-img'>
                                    <img src="../../../public/imgs/HTML5_logo_and_wordmark.svg" />
                                    <img src="../../../public/imgs/PHP-logo.svg" />
                                    <img src="../../../public/imgs/CSS3_logo_and_wordmark.svg" />
                                    <img src="../../../public/imgs/Javascript_badge.svg" />
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