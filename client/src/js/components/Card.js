import React from "react";
import PropTypes from "prop-types";
import "./../../styles/Card.css";

const Card = ({ className, children }) => (
  <div className={className}>{children}</div>
);

Card.propTypes = {
  title: PropTypes.string,
  note: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;
