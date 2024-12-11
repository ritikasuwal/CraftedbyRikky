import React, { useState, useCallback } from "react";
import "./mywork.css";
import mywork from "./mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = useCallback(() => {
    setVisibleProjects((prevVisible) => (isExpanded ? 4 : mywork.length));
    setIsExpanded((prev) => !prev);
  }, [isExpanded]);

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">
        {mywork.slice(0, visibleProjects).map((work, index) => (
          <div
            key={index}
            className="mywork-item"
            // Improve accessibility
            tabIndex={0}
            aria-label={`Project: ${
              work.title || `Unnamed Project ${index + 1}`
            }`}
          >
            <img
              src={work.w_img}
              alt={work.title || `Project ${index + 1}`}
              className="mywork-image"
              // Add lazy loading for performance
              loading="lazy"
            />
            {work.title && (
              <div className="mywork-overlay">
                <h3>{work.title}</h3>
                {work.description && <p>{work.description}</p>}
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {mywork.length > 4 && (
        <div
          className="mywork-showmore"
          onClick={handleShowMore}
          // Improve keyboard accessibility
          onKeyDown={(e) => e.key === "Enter" && handleShowMore()}
          tabIndex={0}
          role="button"
          aria-expanded={isExpanded}
        >
          <p>{isExpanded ? "Show Less" : "Show More"}</p>
          <img
            src={arrow_icon}
            alt={isExpanded ? "Collapse" : "Expand"}
            className="showmore-arrow"
            style={{
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MyWork;
