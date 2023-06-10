import PageLinks from "./PageLinks";
import navLogo from "../images/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNavBtnClick = () => {
    setShowSidebar(true);
  };
  return (
    <>
      <nav class="nav" id="nav">
        <div class="nav-center">
          <div class="nav-header">
            <img src={navLogo} class="nav-logo" alt="nav logo" />
            <button class="nav-btn" id="nav-btn" onClick={handleNavBtnClick}>
              {/* <i class="fas fa-bars"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
          <ul class="nav-links" style={{ marginTop: "0px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {/* <PageLinks /> */}
        </div>
      </nav>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Navbar;
