import React, { Component } from "react";
import PropTypes from "prop-types";
import ReplyListContainer from "../containers/ReplyListContainer";
import ReplyButton from "../containers/ReplyButton";
import ReplyCountContainer from "../containers/ReplyCountContainer";
import Badge from "./Badge";
import "../../styles/PostLower.css";

class PostLower extends Component {
  constructor() {
    super();

    this.toggleExpandReplies = this.toggleExpandReplies.bind(this);

    this.state = {
      expanded: false,
    };
  }

  toggleExpandReplies() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const { post } = this.props;
    const { expanded } = this.state;

    const isAccepted = post.replies.some(
      (reply) => reply.status === "accepted"
    );

    return (
      <div>
        <div className="lower__controls">
          {isAccepted ? (
            <Badge className="badge badge--green">Accepted</Badge>
          ) : (
            <ReplyButton post={post} />
          )}
          <ReplyCountContainer
            replies={post.replies}
            expanded={expanded}
            onClick={this.toggleExpandReplies}
          />
        </div>
        <ReplyListContainer post={post} expanded={expanded} />
      </div>
    );
  }
}

PostLower.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostLower;
