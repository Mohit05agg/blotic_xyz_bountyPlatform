import React from "react";


const Card = ({className, cardHeading, buttons }) => {
  return (
    <div className={`roadmap-container ${className}`}>
      <div className="roadmap-card">
        <div className="roadmap-face roadmap-face1">
          <div className="roadmap-content">
            <div className="roadmap-icon">
              <h1>{cardHeading}</h1>
            </div>
          </div>
        </div>
        <div className="roadmap-face roadmap-face2">
          <div className="roadmap-content">
          <ul className="roadmap-card-sub-menu">
            {buttons.map((button, index) => (
              <a key={index} href={button.link}>
                <li className="roadmap-card-menu-item">{button.label}</li>
              </a>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Card;
