import React from "react";
import '../App.css';
import AboutBackground from "../Assets/about_background.png";
import AboutBackgroundImage from "../Assets/about_image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/*<img src={AboutBackground} alt="" />*/}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" height="600px"/>
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Donec a tincidunt quam. Nullam scelerisque tortor
        </h1>
        <p className="primary-text">
        Sed bibendum maximus ipsum id eleifend. Maecenas mattis neque vitae euismod condimentum. Vestibulum posuere tortor at ultricies tristique.
        </p>
        <p className="primary-text">
        Fusce commodo neque mauris. Maecenas fermentum, libero vitae posuere accumsan, eros velit venenatis augue, vel rutrum mi tortor a augue. Sed vehicula tincidunt quam nec aliquet.
        </p>
        <div className="about-buttons-container">
          <a href="index.html"><button className="learn-button">Button</button></a>
        </div>
      </div>
    </div>
  );
};

export default About;