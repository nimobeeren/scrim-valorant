import React from "react";
import PropTypes from "prop-types";
import "../../styles/WelcomeMessage.css";

const WelcomeMessage = ({ user }) => {
  // if (!user || !user.name) {
  //   return <div className="welcome-message welcome-message__hidden" />;
  // }
  return (
    <div className="welcome-message">
      <span>YOU'RE IN...</span> Time to get good.
    </div>
  );
};

WelcomeMessage.propTypes = {
  user: PropTypes.object,
};

export default WelcomeMessage;
