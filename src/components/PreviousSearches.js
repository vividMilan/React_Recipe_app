import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PreviousSearches = () => {
  const searches = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "briyani",
    "salad",
    "lasagna",
    "pudding",
    "soup",
  ];

  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            className="search-item"
            style={{ animationDelay: index * 0.05 + "s" }}
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default PreviousSearches;
