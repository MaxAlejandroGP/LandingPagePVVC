import React from "react";
import bannerImage from "../Assets/banner.png"
import HomeBackground from "../Assets/home_background.png";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-background-image-container">
                {/*<img src={HomeBackground} alt="" />*/}
            </div>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h1>
                    <p className="primary-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div>
                    <img src={bannerImage} alt="" className="home-image-container"/>
                </div>
            </div>
        </div>
    );
};

export default Home;