import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.875 2.5h1.25V10l3.438-3.438.887.888L7.5 12.4 2.55 7.45l.887-.888L6.875 10V2.5Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
