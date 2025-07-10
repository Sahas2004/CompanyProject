import React, { useState } from "react";
import "./JobCard.css";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
import ApplyModal from "./ApplyForm"; // import modal

const JobCard = ({
  title,
  category,
  location,
  type,
  salary,
  description,
  featured,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className={`job-card ${featured ? "featured" : ""} , Div_of_JobCard`}>
        
        <div className="job-content">
          <h3>{title}</h3>
          <p className="category">{category}</p>
          <p className="description">{description}</p>
          <div className="job-info">
            <p><FaMapMarkerAlt /> {location}</p>
            <p><FaBriefcase /> {type}</p>
            <p><FaMoneyBillWave /> {salary}</p>
          </div>
          <hr />
          <div className="card-buttons">
            <button className="btn btn-primary w-100 Button_of_JobCard" onClick={handleShow}>
              Apply
            </button>
          </div>
        </div>
      </div>

      <ApplyModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default JobCard;
