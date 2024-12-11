import React from "react";
import "./Services.css";
import Services_data from "./Services_data.js";
import arrow from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Let's Build Together</h1>
      </div>
      <div className="services-container">
        {Services_data.map((service, index) => (
          <div key={index} className="services-format">
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img
                src={arrow}
                alt="Read more arrow"
                className="services-arrow"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
