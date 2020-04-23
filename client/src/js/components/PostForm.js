import React from "react";
import PropTypes from "prop-types";
import RegionIcon from "@material-ui/icons/Public";
import LevelIcon from "@material-ui/icons/Star";
import MapsIcon from "@material-ui/icons/Map";
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
      <h4>Team info</h4>
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
      <h4>
        <RegionIcon />
        Region
      </h4>
      <RegionRadioButtons onChange={onRegionChange} />
    </fieldset>
    <fieldset>
      <h4>
        <LevelIcon />
        Level
      </h4>
      <LevelRadioButtons onChange={onLevelChange} />
    </fieldset>
    <fieldset id="new-post-maps">
      <h4>
        <MapsIcon />
        Maps
      </h4>
      <MapCheckboxes onChange={onMapsChange} />
    </fieldset>
    <div className="post-form__controls">
      <div className="post-form__btn-wrapper">
        <SubmitButton className="btn" label="Create" />
      </div>
      <div className="post-form__btn-wrapper">
        <Button
          className="btn btn--secondary"
          label="Cancel"
          onClick={onCancel}
        />
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
