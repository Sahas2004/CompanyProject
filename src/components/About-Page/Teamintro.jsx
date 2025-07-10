import React from 'react';
import './Teamintro.css';
import { Link } from 'react-router-dom';

const Teamintro = () => {
  return (
    <section className="team-intro">
      <div className="team-text">
        <h2>Join With Us...</h2>
        <p>We have started Mindcrafters HR Partner with an aim to connect exceptional talent with leading organizations. </p>
      </div>
      <div className="team-button">
    
      <Link to="/contact" className="reach-button">REACH US OUT</Link>

      
      </div>
    </section>
  );
};

export default Teamintro;