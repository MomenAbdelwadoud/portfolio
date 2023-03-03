import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.613 19.85 4.85-4.85-4.85-4.85a1.245 1.245 0 0 1 .404-2.033 1.246 1.246 0 0 1 1.358.27l5.738 5.738a1.245 1.245 0 0 1 0 1.762l-5.738 5.738a1.244 1.244 0 0 1-1.762 0c-.476-.488-.488-1.288 0-1.775Z"
      fill={props.color}
    />
  </svg>
);

export default SvgComponent;
