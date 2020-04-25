import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cancelPostDraft, createPost } from "../actions/CreatePostActions";
import { riotIdErrorHandler } from "../../util";
import PostForm from "../components/PostForm";

class PostFormContainer extends Component {
  constructor(props) {
    super(props);

    // Bind event handlers
    this.handleTeamNameChange = this.handleTeamNameChange.bind(this);
    this.handleRiotIdChange = this.handleRiotIdChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleMapsChange = this.handleMapsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set default state
    this.state = {
      teamName: undefined,
      riotId: undefined,
      riotIdElement: undefined,
      region: "NA West", // FIXME: No guarantee that this matches UI state
      level: 1, // FIXME: No guarantee that this matches UI state
      maps: [],
    };
  }

  componentDidMount() {
    const riotIdElement = document.querySelector("#riot-id");
    this.setState({ riotIdElement });
    riotIdElement.addEventListener("input", riotIdErrorHandler);
  }

  componentWillUnmount() {
    if (this.state.riotIdElement) {
      this.state.riotIdElement.removeEventListener("input", riotIdErrorHandler);
    }
  }

  handleTeamNameChange(e) {
    this.setState({
      teamName: e.target.value,
    });
  }

  handleRiotIdChange(e) {
    this.setState({
      riotId: e.target.value,
    });
  }

  handleRegionChange(e) {
    this.setState({
      region: e.target.value,
    });
  }

  handleLevelChange(e) {
    this.setState({
      level: e.target.value,
    });
  }

  handleMapsChange(e, state) {
    this.setState({
      maps: state.checkedItems,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { currentUser, filters, createPost } = this.props;
    const { teamName, riotId, region, level, maps } = this.state;
    let fail = false;

    // Make sure the user is authenticated
    if (!currentUser || !currentUser.authenticated) {
      fail = true;
    }

    // Validate map selection
    if (maps.length === 0) {
      document.getElementById("maps").className = "invalid";
      fail = true;
    } else {
      document.getElementById("maps").className = "";
    }

    // Don't submit if form did not validate
    if (fail) {
      return;
    }

    // Create new post
    createPost(
      {
        author: currentUser.id,
        body: {
          teamName,
          riotId,
          region,
          level,
          maps,
        },
      },
      filters,
      currentUser
    );
  }

  render() {
    const { handleCancel } = this.props;

    return (
      <PostForm
        onSubmit={this.handleSubmit}
        onTeamNameChange={this.handleTeamNameChange}
        onRiotIdChange={this.handleRiotIdChange}
        onRegionChange={this.handleRegionChange}
        onLevelChange={this.handleLevelChange}
        onMapsChange={this.handleMapsChange}
        onCancel={handleCancel}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createPost,
      handleCancel: cancelPostDraft,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);
