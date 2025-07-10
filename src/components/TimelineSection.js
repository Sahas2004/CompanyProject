import React from "react";
import "./TimelineSection.css";

const TimelineSection = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot">2025</div>
          <div className="timeline-content">
            <h5>Company Establishment</h5>
            <p>Mindcrafters HR Partner was founded by Mrs. Indrayani Desai to connect exceptional talent with leading organizations.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot">Upcomings</div>
          <div className="timeline-content">
            <h5>Headhunting Focus</h5>
            <p>We will be launching with a strong emphasis on headhunting services for niche and skilled talent acquisition.</p>
          </div>
          
        </div>
        <div className="timeline-item">
          <div className="timeline-dot">Upcomings</div>
          <div className="timeline-content">
            <h5>Strategic Growth Vision</h5>
            <p>Set the roadmap to expand into additional recruitment services including payroll, compliance, and HR tech.</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default TimelineSection;
