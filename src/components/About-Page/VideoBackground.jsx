import React from 'react';
import './VideoBackground.css';
import bgvideo from '../../assets/bgvideo.mp4'; // ✅ Replace with your video path

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay-content">
        <h1>Empowering the Future</h1>
        <p>Join us to explore limitless opportunities </p>
      </div>
    </div>
  );
};

export default VideoBackground;