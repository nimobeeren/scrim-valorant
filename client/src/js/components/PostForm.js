import React from "react";
import PropTypes from "prop-types";
import RegionRadioButtons from "../containers/RegionRadioButtons";
import LevelRadioButtons from "../containers/LevelRadioButtons";
import MapCheckboxes from "../containers/MapCheckboxes";
import Button from "./Button";
import SubmitButton from "./SubmitButton";
import "../../styles/PostForm.css";

const PostForm = ({
  onTeamNameChange,
  onRiotIdChange,
  onRegionChange,
  onLevelChange,
  onMapsChange,
  onSubmit,
  onCancel,
}) => (
  <form className="post-form" onSubmit={onSubmit}>
    <fieldset>
      <legend>Team info</legend>
      <input
        type="text"
        placeholder="Team name (optional)"
        autoFocus
        onChange={onTeamNameChange}
      />
      <input
        type="text"
        id="riot-id"
        placeholder="Riot ID#Tagline"
        required
        pattern=".+#.+"
        onChange={onRiotIdChange}
      />
    </fieldset>
    <fieldset>
      <legend>Region</legend>
      <RegionRadioButtons onChange={onRegionChange} />
    </fieldset>
    <fieldset>
      <legend>Level</legend>
      <LevelRadioButtons onChange={onLevelChange} />
    </fieldset>
    <fieldset id="new-post-maps">
      <legend>Maps</legend>
      <MapCheckboxes onChange={onMapsChange} />
    </fieldset>
    <div className="post-form__controls">
      <div className="post-form__btn-wrapper">
        <SubmitButton className="btn" label="Create" />
      </div>
      <div className="post-form__btn-wrapper">
        <Button className="btn" label="Cancel" onClick={onCancel} />
      </div>
    </div>
  </form>
);

PostForm.propTypes = {
  onTeamNameChange: PropTypes.func,
  onRiotIdChange: PropTypes.func,
  onRegionChange: PropTypes.func,
  onLevelChange: PropTypes.func,
  onMapsChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default PostForm;
