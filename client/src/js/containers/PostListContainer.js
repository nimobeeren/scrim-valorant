import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/PostActions";
import PostList from "../components/PostList";

class PostListContainer extends Component {
  constructor(props) {
    super(props);

    // Refresh post list on fixed interval
    setInterval(() => this.props.fetchPosts(this.props.filters), 5000); // FIXME PLEASE
  }

  render() {
    return <PostList posts={this.props.posts} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.items,
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchPosts,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
