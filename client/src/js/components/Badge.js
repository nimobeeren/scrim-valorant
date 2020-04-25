import React from "react";
import PropTypes from "prop-types";
import "../../styles/Badge.css";

const Badge = (props) => <div className="badge">{props.name}</div>;

Badge.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Badge;
