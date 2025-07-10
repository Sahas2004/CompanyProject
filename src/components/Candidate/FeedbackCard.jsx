// src/components/FeedbackCard.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import "./FeedbackCard.css";

export const FeedbackCard = ({ review, author, logo, stamp, stars = 5 }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="feedback-card p-4 h-100 position-relative">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <img src={logo} alt="logo" className="feedback-logo" />
          <div className="text-warning">
            {[...Array(stars)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
        <p className="mb-3 text-white">{review}</p>
        {author && (
          <p className="fw-semibold small mb-0">
            {author.name}
            {author.image && (
              <img src={author.image} alt={author.name} className="author-img ms-2" />
            )}
          </p>
        )}
      </div>
    </div>
  );
};