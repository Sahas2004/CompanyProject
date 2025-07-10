import React from 'react';
import './Brouse.css';
import bgImage from '../../assets/job.jpg'; 

const Brouse = () => {
  return (
    <div
      className="image-background-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="image-overlay-content">
        <h1>" Be the Voice Behind Every Hire "</h1>
        <p>Join us to explore limitless opportunities...!</p>
      </div>
    </div>
  );
};

export default Brouse;