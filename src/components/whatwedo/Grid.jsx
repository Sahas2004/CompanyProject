import React from "react";
import { Link } from "react-router-dom";
import "./Grid.css";
import HR from "../../assets/HR.jpg";
import HR2 from "../../assets/HR2.jpg";
import HR123 from "../../assets/HR123.jpg"
import HR1234 from "../../assets/HR1234.jpg"

export const Grid = () => {
  return (
    <>
      <div className="Grid1 container-fluid p-0 pt-5">
        
        <div className="container">
          <div className="row justify-content-center g-4 card-section-bg">
            
            <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-flex justify-content-center">
              <div className="custom-card">
                <img src={HR} className="custom-card-img" alt="HR Outsourcing" />
                <div className="custom-card-body">
                  <h1 className="custom-card-title">Understanding the client’s needs</h1>
                  <h5 className="custom-card-text">
                    "Mindcrafters focuses on gathering detailed information about the role, the required skills and experience, the company culture, and the overall hiring process..."
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-flex justify-content-center">
              <div className="custom-card">
                <img src={HR2} className="custom-card-img" alt="Recruitment" />
                <div className="custom-card-body">
                  <h1 className="custom-card-title">Data Repository and Research Approach</h1>
                  <h5 className="custom-card-text">
                    "We have a well-defined database and research strategy to efficiently source, track, and manage candidates..."
                  </h5>
                </div>
              </div>
            </div>

            
            <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-flex justify-content-center">
              <div className="custom-card">
                <img src={HR1234} className="custom-card-img" alt="Recruitment" />
                <div className="custom-card-body">
                  <h1 className="custom-card-title">Seamless Integration for Smarter Hiring</h1>
                  <h5 className="custom-card-text">
                    "We maintain clear and consistent communication with both our clients and the selected candidates..."
                  </h5>
                </div>
              </div>
            </div>

           
            <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-flex justify-content-center">
              <div className="custom-card">
                <img src={HR123} className="custom-card-img" alt="Recruitment" />
                <div className="custom-card-body">
                  <h1 className="custom-card-title">Beyond Recruitment: Supporting Seamless Transitions</h1>
                  <h5 className="custom-card-text">
                    "We go far beyond simply filling roles—we actively support the journey that follows..."
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div
          id="container_fluid_of_Grid"
          className="container-fluid d-flex flex-column justify-content-center align-items-center text-center p-4 mt-5"
        >
          <h1 id="h1_of_Grid" className="h1 text-center mb-3">
            We Are Ready To Bring Bigger & Stronger Projects
          </h1>

          <Link
            id="button_of_Grid"
            type="button"
            className="btn btn-outline-light"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};
