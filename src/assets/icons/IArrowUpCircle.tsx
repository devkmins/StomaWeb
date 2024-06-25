import React from "react";

const IArrowUpCircle = () => (
  <svg
    width="30"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

export default React.memo(IArrowUpCircle);
