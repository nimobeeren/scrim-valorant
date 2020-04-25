import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deletePost } from "../actions/DeletePostActions";
import Post from "../components/Post";

const PostContainer = (props) => {
  return <Post {...props} />;
};

function mapStateToProps(state) {
  return {
    levelNames: state.levelNames,
    filters: state.filters,
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deletePost,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
