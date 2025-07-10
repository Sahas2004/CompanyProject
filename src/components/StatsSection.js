import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './StatsSection.css';
import { FaProjectDiagram, FaUsers, FaHeartbeat, FaTree } from "react-icons/fa";

const StatsSection = () => {
  const statsData = [
    { number: 150, label: "PROJECTS COMPLETED", icon: <FaProjectDiagram size={60} /> },
    { number: 26, label: "ACTIVE CLIENTS", icon: <FaUsers size={60} /> },
    { number: 2600, label: "LIVES TRANSFORMED", icon: <FaHeartbeat size={60} /> },
    { number: 355, label: "TREES PLANTED", icon: <FaTree size={60} /> },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      const increment = Math.ceil(stat.number / 50);
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(newCounts[index] + increment, stat.number);
          }
          return newCounts;
        });
      }, 30);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="container-fluid bg-dark text-white py-5">
      <div className="row justify-content-center text-center">
        {statsData.map((stat, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="stats-card bg-dark border-0 text-center text-white">
              <div className="card-body">
                <div className="mb-3">{stat.icon}</div>
                <h2 className="count-number">{counts[index]}</h2>
                <p className="text-uppercase small mt-2">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
