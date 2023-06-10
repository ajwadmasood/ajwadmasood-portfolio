import React from "react";
import img from "../images/project-1.jpeg";

const PortfolioProjects = ({
  img,
  text,
  firstPath,
  name,
  secondPath,
  viewBox,
}) => {
  return (
    <article class="single-project">
      <div class="project-container">
        <img src={img} alt="single project" />
        {/* <a href="https://www.johnsmilga.com" class="project-icon"> */}
        <a className="project-icon">
          <svg
            // className={iconClass}
            // className="carbon-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox={viewBox}
          >
            <path d={firstPath} />
          </svg>
          {/* <i class="fas fa-home"></i> */}
        </a>
      </div>
      <div class="project-details">
        <h4>{name}</h4>
        <p>{text}</p>
        <div class="project-footer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 496 512"
            >
              <path d={secondPath} />
            </svg>
          </span>
          {/* <i class="fab fa-github"></i> */}
          <a href="https://www.github.com">source code</a>
        </div>
      </div>
    </article>
  );
};

export default PortfolioProjects;
