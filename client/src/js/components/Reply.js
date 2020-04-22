import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../../styles/Reply.css";

const Reply = ({ reply, isPostAuthor, onAccept, onDecline }) => {
  const { map, message } = reply.body || {};
  const authorName = (reply.author && reply.author.name) || "Anonymous";

  switch (reply.type) {
    // Request to play a map
    case "request":
      const accepted = reply.status === "accepted";
      const declined = reply.status === "declined";

      // Create section containing reply text
      let children = [
        <div
          key="text"
          className={"reply__text" + (declined ? " reply--declined" : "")}
        >
          <span className="reply__author">{authorName}</span>
          <span>&nbsp;wants to play&nbsp;</span>
          <span className="map">{map}</span>
          {message ? ": " : ""}
          <i>{message}</i>
        </div>,
      ];

      const acceptButton = (
        <Button className="btn btn--small" label="Accept" onClick={onAccept} />
      );
      const declineButton = (
        <Button
          className="btn btn--small"
          label="Decline"
          onClick={onDecline}
        />
      );

      if (accepted) {
        // Show accepted status
        children.push(
          <div key="status" className="reply__status">
            Accepted
          </div>
        );
      } else if (declined) {
        // Show declined status
        children.push(
          <div key="status" className="reply__status">
            Declined
          </div>
        );
      } else if (isPostAuthor) {
        // Show accept/decline buttons
        children.push(
          <div key="controls" className="reply__controls">
            <div className="reply__button-wrapper">{acceptButton}</div>
            <div className="reply__button-wrapper">{declineButton}</div>
          </div>
        );
      }

      return (
        <div key={reply._id} className="replies__reply reply--request">
          {children}
        </div>
      );

    // Accepting a request to play
    case "accept":
      return (
        <div key={reply._id} className="replies__reply">
          <div className="reply__text">
            <span className="reply__author">{authorName}</span>&nbsp; has
            accepted your request.
          </div>
        </div>
      );

    // Declining a request to play
    case "decline":
      return (
        <div key={reply._id} className="replies__reply">
          <div className="reply__text">
            <span className="reply__author">{authorName}</span>&nbsp; has
            declined your request.
          </div>
        </div>
      );

    // Regular text message
    default:
      return (
        <div key={reply._id} className="replies__reply">
          <div className="reply__text">
            <span className="reply__author">{authorName}:</span>&nbsp;
            {message}
          </div>
        </div>
      );
  }
};

Reply.propTypes = {
  reply: PropTypes.object.isRequired,
  isPostAuthor: PropTypes.bool,
  onAccept: PropTypes.func,
  onDecline: PropTypes.func,
};

export default Reply;
