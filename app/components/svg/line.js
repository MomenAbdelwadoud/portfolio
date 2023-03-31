"use client";
import * as React from "react";
import { motion } from "framer-motion";

const SvgComponent = (props) => (
  <motion.svg
    width={101}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
      d="M3 23c7.937-5.189 17.208-8.888 26.586-12.099 12.264-4.2 24.858-7.59 38.326-7.882C78.255 2.795 90.148 4.528 98 10.23"
      stroke="#7CEBFF"
      strokeOpacity={0.7}
      strokeWidth={5}
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1, transition: { delay: 1 } }}
    />
  </motion.svg>
);

export default SvgComponent;
