import React, { useState, useEffect } from "react";
import "./TabSection.css";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "mission":
        return (
          <p className={`mt-4 text-white ${fade ? "fade-in" : ""}`}>
           Identify and attract talent pool, matching talent with best opportunities, adding value to the clients and candidates by providing best HR solutions adherence with ethical practices
          </p>
        );
      case "vision":
        return (
          <p className={`mt-4 text-white ${fade ? "fade-in" : ""}`}>
           We want to be the preferred and trusted recruitment and staffing partner, connecting top talent with innovative organizations resulting in satisfaction for both organization and workforce.
          </p>
        );
      case "history":
        return (
          <p className={`mt-4 text-white ${fade ? "fade-in" : ""}`}>We have started Mindcrafters HR Partner with an aim to connect exceptional talent with leading organizations. 
With over 12+ years of experience in Human Resource-workforce management and a passion for providing best talent to our clients, Mrs. Indrayani Desai(Proprietor) established Mindcrafters HR Partner which mainly emphasis on headhunting and will expands for other HR services in future.
 
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="btn-group">
        <button
          className={`btn fw-bold ${activeTab === "mission" ? "btn-warning text-black" : "btn-dark text-white"}`}
          onClick={() => setActiveTab("mission")}
        >
          MISSION
        </button>
        <button
          className={`btn fw-bold ${activeTab === "vision" ? "btn-warning text-black" : "btn-dark text-white"}`}
          onClick={() => setActiveTab("vision")}
        >
          VISION
        </button>
        <button
          className={`btn fw-bold ${activeTab === "history" ? "btn-warning text-black" : "btn-dark text-white"}`}
          onClick={() => setActiveTab("history")}
        >
          HISTORY
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default TabSection;
