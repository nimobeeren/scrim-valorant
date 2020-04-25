import React, { Component } from "react";
import Post from "../components/Post";
import { connect } from "react-redux";

const PostContainer = (props) => {
  console.log({ props });
  return <Post {...props} />;
};

function mapStateToProps(state) {
  return {
    levelNames: state.levelNames,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(PostContainer);
