import React, { Component } from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import RegionIcon from "@material-ui/icons/Public";
import LevelIcon from "@material-ui/icons/Star";
import MapsIcon from "@material-ui/icons/Map";
import Card from "./Card";
import MapPool from "../containers/MapPool";
import PostLower from "./PostLower";
import "../../styles/Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.getTeamNameString = this.getTeamNameString.bind(this);
    this.getAuthor = this.getAuthor.bind(this);
    this.getAgeString = this.getAgeString.bind(this);
    this.getLevelString = this.getLevelString.bind(this);
    this.getMapList = this.getMapList.bind(this);
    this.getIsAuthor = this.getIsAuthor.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getTeamNameString() {
    const { post } = this.props;

    if (post.body && post.body.teamName) {
      return post.body.teamName;
    } else {
      return "Anonymous";
    }
  }

  getAuthor() {
    const { post } = this.props;
    const name = post?.body?.riotId || "Anonymous";
    return `by ${name}`;
  }

  getAgeString() {
    const { post } = this.props;

    if (!post.createdAt) {
      return null;
    }

    const age = Date.now() - new Date(post.createdAt);

    let seconds = age / 1000;
    if (seconds < 30) {
      return "Just now";
    }
    if (seconds < 60) {
      let floored = Math.floor(seconds);
      return `${floored} seconds ago`;
    }

    let minutes = seconds / 60;
    if (minutes < 60) {
      let floored = Math.floor(minutes);
      return `${floored} minute${floored === 1 ? "" : "s"} ago`;
    }

    let hours = minutes / 60;
    if (hours < 24) {
      let floored = Math.floor(hours);
      return `${floored} hour${floored === 1 ? "" : "s"} ago`;
    }

    let days = hours / 24;
    let floored = Math.floor(days);
    return `${floored} day${floored === 1 ? "" : "s"} ago`;
  }

  getLevelString() {
    const { post, levelNames } = this.props;

    if (post.body) {
      // Make sure we have a number
      let number = parseInt(post.body.level, 10);
      if (Number.isNaN(number)) {
        return "Unknown";
      }

      // Make sure number is in range of the defined levels
      if (number >= levelNames.length) {
        number = levelNames.length - 1;
      } else if (number < 0) {
        number = 0;
      }

      return levelNames[number];
    } else {
      return "Unknown";
    }
  }

  getMapList() {
    const { post } = this.props;
    if (!post.body) {
      return [];
    }
    return post.body.maps;
  }

  getIsAuthor() {
    const { post, currentUser } = this.props;
    return post.author._id === currentUser?.id;
  }

  handleDelete() {
    const { post, filters, currentUser, deletePost } = this.props;
    deletePost(post, filters, currentUser);
  }

  render() {
    const { post } = this.props;
    const teamName = this.getTeamNameString();
    const author = this.getAuthor();
    const age = this.getAgeString();
    const region = post.body.region;
    const level = this.getLevelString();
    const maps = this.getMapList();
    const isAuthor = this.getIsAuthor();

    return (
      <Card className="card post">
        <div className="card__heading">
          {!!teamName && <h3>{teamName}</h3>}
          {!!author && <span className="card__note">{author}</span>}
          {!!age && <div className="card__subtitle">{age}</div>}
          {isAuthor && (
            <DeleteIcon className="card__icon" onClick={this.handleDelete} />
          )}
        </div>
        <div className="post__fields">
          <div className="post__field-label">
            <RegionIcon />
            Region
          </div>
          <div>{region}</div>
          <div className="post__field-label">
            <LevelIcon />
            Level
          </div>
          <div>{level}</div>
          <div className="post__field-label">
            <MapsIcon />
            Maps
          </div>
          <div>
            <MapPool maps={maps} />
          </div>
        </div>
        <PostLower post={post} />
      </Card>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  levelNames: PropTypes.array,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
Post.defaultProps = {
  levelNames: ["Unknown"],
};

export default Post;
