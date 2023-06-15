import React from "react";

const Skill = ({ language, viewBox, path, color }) => {
  return (
    <div class="skill">
      <p>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox={viewBox}
          // style={{ paddingTop: "2px", marginRight: "5px", fill: `${color}` }}
          // style={{ paddingTop: "2px", fill: `${color}` }}
        >
          <path d={path} />
        </svg> */}
        {/* <span> </span> */}
        {language}
      </p>
      <div class="skill-container">
        <div class="skill-value"></div>
      </div>
    </div>
  );
};

export default Skill;
