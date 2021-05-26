import React from "react";
import logo from "../assets/EduhubLogo.png";
import "./styles/AboutUs.css";
import Team from './Team';

function AboutUs() {
  
    return (
      <div className="main-content">
        <header className="page-header">
          <img
            src={logo}
            className="logo"
            alt="logo"
          />
          <h1 className="header-title">Vizualize & Analyze To Cognize</h1>
        </header>
        <div className="content-sub">
        We are the team of dedicated students,
        in pursuit to do whatever it takes to make your learning unforgettable.
        </div>
        <div id="tmpxyz">
          <p className='ourTeam'>Meet The Team</p>
        </div>
        <div id="team">
          <Team />
        </div>

      </div>
    );
}

export default AboutUs;
