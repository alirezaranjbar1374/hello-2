import React from "react";

import "./CircleSpinner.css";

export default function CircleSpinner() {
  return (
    <div className="loader-1">
      <svg className="circular" viewBox="25 25 50 50">
        <circle
          className="path-1"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
}
