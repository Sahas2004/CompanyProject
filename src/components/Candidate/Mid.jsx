import React from "react";
import "./Mid.css";
import Video from "../../assets/Video.mp4";
import { Link } from "react-router-dom";

export const Mid = () => {
  return (
    <>
      <div className="container-fluid p-3 text-center">
        <h1 id="h1_of_Mid" className="fw-bold text-white">
          Connect With Us – We'll Find Your Perfect Match
        </h1>
        <p id="p_of_Mid">
          "We help ambitious candidates discover meaningful roles where they can grow, lead, and make impact."
        </p>
      </div>

      <div className="cont container my-4">
        <div className="video-card">
          <video autoPlay muted loop>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="video-overlay">
            <h2 className="fw-bold text-white">Discover the Experience</h2>
           
            <Link
              to="/What-We-Do"
              className="Button_of_Candidate"
              style={{textDecoration:"none"}}
            >
              Know More...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
