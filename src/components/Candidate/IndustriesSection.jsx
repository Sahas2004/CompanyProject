import React from "react";
import "./IndustriesSection.css";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

export const IndustriesSection = () => {
  return (
    <div className="container-fluid py-5  industries-section-bg">
      <div className="row align-items-center">
        
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-2">Industries we specialize in</h2>
          <div className="underline mb-3"></div>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-white">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
          <Link
            to="/contact"
            className="btn btn-dark px-4 py-2 mt-3 button_of_IndustriesSection"
          >
            Contact Us
          </Link>
        </div>

        
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <Link to="/technology" className="text-decoration-none">
                <div className="card industry-card text-center p-4">
                  <FaLaptopCode size={40} className="text-secondary mb-3" />
                  <h5 className="fw-bold text-dark">Technology</h5>
                  <p className="text-muted small mb-0">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6">
              <Link to="/healthcare" className="text-decoration-none">
                <div className="card industry-card text-center p-4">
                  <FaGraduationCap size={40} className="text-secondary mb-3" />
                  <h5 className="fw-bold text-dark">Education</h5>
                  <p className="text-muted small mb-0">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6">
              <Link to="/construction" className="text-decoration-none">
                <div className="card industry-card text-center p-4">
                  <FaUsers size={40} className="text-secondary mb-3" />
                  <h5 className="fw-bold text-dark">Connection</h5>
                  <p className="text-muted small mb-0">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6">
              <Link to="/finance" className="text-decoration-none">
                <div className="card industry-card text-center p-4">
                  <FaChartBar size={40} className="text-secondary mb-3" />
                  <h5 className="fw-bold text-dark">Finance</h5>
                  <p className="text-muted small mb-0">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};