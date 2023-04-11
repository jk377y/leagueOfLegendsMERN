import React, { useState } from "react";
import Champions from "./Champions";
import LeagueLogo from "../images/lolLogo.jpg";


// currently switching components with useState, but will reconfigure for router later
const Homepage = () => {
  const [displayComponent, setDisplayComponent] = useState("home");

  const handleLinkClick = (event, componentName) => {
    event.preventDefault();
    setDisplayComponent(componentName);
  };

  return (
    <div>
      <header>
        <img src={LeagueLogo} alt="LOL title" className="titleImage" />
        <nav>
          <ul>
            <li className="navLinks">
              <a href="/" onClick={(event) => handleLinkClick(event, "home")}>
                Home
              </a>
            </li>
            <li className="navLinks">
              <a href="/champions" onClick={(event) => handleLinkClick(event, "champions")}>
                Champions
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {displayComponent === "home" && (
        <div className="homepageDiv">
          <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/aR-KAldshAE"
            title="Warriors | Season 2020 Cinematic - League of Legends (ft. 2WEI and Edda Hayes)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          ></iframe>
        </div>
      )}

      {displayComponent === "champions" && <Champions />}
    </div>
  );
};

export default Homepage;
