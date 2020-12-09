import React from 'react';
import './banner.css';
import Banner from './Assets/Images/bannerImg.png'

function BigBanner() {
    return (
        <div className="banner_container">
            <div className="banner_left">
                <div className="box">
                    <p>
                        A Full Stack Developer who specialize in (Html, CSS, NodeJS, ReactJS and React Native).
                        Experience building complete web application and mobile application with backend API system.
                    </p>
                </div>
            </div>
            <div className="banner_right">
                <img src={Banner} alt="banner" className="banner_img" />
            </div>
            <div className="circle0"></div>
        </div>
    )
}

export default BigBanner
