import React from "react";
import "./About.css";
import profile_img from "../../assets/about-img (2).jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" className="profile-image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a beginner front-end developer with a strong enthusiasm for
              web design and development.
            </p>
            <p>
              Alongside web development, I am also involved in UI/UX designing,
              which allows me to blend creativity with functionality. Currently,
              I am learning React.js to expand my skill set and build dynamic,
              modern web applications. With a focus on continuous growth, I
              strive to craft responsive, user-friendly designs that make an
              impact.
            </p>
          </div>
          <div className="about-skills">
            {[
              { skill: "HTML & CSS", level: 80 },
              { skill: "JavaScript", level: 50 },
              { skill: "UI/UX", level: 60 },
              { skill: "React JS", level: 50 },
            ].map((item, index) => (
              <div key={index} className="about-skill">
                <p>{item.skill}</p>
                <hr style={{ width: `${item.level}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr className="achievements-divider" />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
