import React from "react";
import { FaTimes, FaPencilAlt, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "cross":
      return <FaTimes className="icons" />;
    case "circle":
      return <FaRegCircle className="icons" />;
    default:
      return <FaPencilAlt className="icons" />;
  }
};

export default Icon;
