import React, { useState } from "react";
import "./Search.css";
import {
  FaFilter,
  FaSearch,
  FaUserCheck,
  FaBell,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = () => {
  const handleReferClick = () => {
    const homeUrl = `${window.location.origin}/`;
    if (navigator.share) {
      navigator
        .share({
          title: "Refer a Friend",
          text: "Check out this job portal!",
          url: homeUrl,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(homeUrl).then(() => {
        alert("Home page link copied to clipboard!");
      });
    }
  };

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    
  };

  return (
    <div className="search-bar-container">
      <div className="d-flex justify-content-center align-items-center gap-2">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          method="POST"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            style={{
              padding: "8px 10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            className="search-icon-button text-white"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="action-buttons w-5">
        {/* REFER Button */}
        <button
          className="action-button d-flex justify-content-center align-items-center text-white"
          onClick={handleReferClick}
        >
          <FaUserCheck className="icon" />
          REFER
        </button>

        <Link
          to="/RegisterForm"
          className="Register_Button action-button d-flex justify-content-center align-items-center text-white text-decoration-none"
        >
          <FaUserPlus className="icon" />
          REGISTER
        </Link>
      </div>
    </div>
  );
};

export default Search;
