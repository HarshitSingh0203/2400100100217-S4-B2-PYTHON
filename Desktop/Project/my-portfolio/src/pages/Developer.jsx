import React, { useState } from "react";

import "./Developer.css";

export default function Developer() {
  return (
    <div className="dev-container">
      <div className="dev-card glass">

        {/* PROFILE */}
        <div className="dev-header">
          <img
            src="/Profile.png"   // 👈 put your image in public folder
            alt="Harshit"
            className="dev-img"
          />

          <h2>Harshit Singh</h2>
          <p className="dev-role">Frontend Developer 🚀</p>
        </div>

        {/* ABOUT */}
        <p className="dev-bio">
          I build modern and responsive web applications using React,
          JavaScript, and clean UI principles. Passionate about creating
          real-world projects and improving user experience.
        </p>

        {/* SKILLS */}
        <div className="dev-skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>API</span>
        </div>

        {/* PROJECTS */}
        <div className="dev-projects">
          <h4>🔥 Projects</h4>
          <ul>
            <li>Portfolio App</li>
            <li>Weather App</li>
            <li>Calculator</li>
          </ul>
        </div>

        {/* LINKS */}
        <div className="dev-links">
          <a
            href="https://github.com/HarshitSingh0203"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://in.linkedin.com/in/harshit-singh-88890a3b0"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}