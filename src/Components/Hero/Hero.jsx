import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile-img.png";
const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <img src={profile_img} alt="" />
        <h1>
          <span>I'm Ritika Suwal,</span> Frontend Developer from Nepal.
        </h1>
        <p>
          I am a front-end developer and UI/UX designer with a strong focus on
          building visually engaging and user-friendly web interfaces. I enjoy
          learning new technologies and leveraging them to bring creative ideas
          to life.
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
