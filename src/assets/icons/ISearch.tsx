import React from "react";

const ISearch = ({ color = "#7f8c8d" }) => (
  <svg
    width="30"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      fill={color}
      stroke={color}
      strokeWidth="0.25"
      clipRule="evenodd"
    />
  </svg>
);

export default React.memo(ISearch);
