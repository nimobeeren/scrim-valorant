import React from "react";
import PropTypes from "prop-types";
import "../../styles/Badge.css";

const Badge = ({ children, className }) => (
  <div className={className || "badge"}>{children}</div>
);

Badge.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Badge;
