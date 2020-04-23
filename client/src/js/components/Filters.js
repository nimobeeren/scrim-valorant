import React from "react";
import PropTypes from "prop-types";
import RegionIcon from "@material-ui/icons/Public";
import LevelIcon from "@material-ui/icons/Star";
import MapsIcon from "@material-ui/icons/Map";
import AgeIcon from "@material-ui/icons/Schedule";
import RegionCheckboxes from "../containers/RegionCheckboxes";
import LevelCheckboxes from "../containers/LevelCheckboxes";
import MapCheckboxes from "../containers/MapCheckboxes";
import AgeRadioButtons from "../containers/AgeRadioButtons";
import ChevronToggle from "./ChevronToggle";
import Button from "./Button";
import "../../styles/Filters.css";

const Filters = (props) => {
  const {
    expanded,
    onExpandedToggle,
    onRegionChange,
    onLevelChange,
    onMapChange,
    onAgeChange,
  } = props;

  return (
    <div className="filters">
      <div className="filters__content">
        <div className="filters__header">
          <h3>Filters</h3>
          <Button
            className="btn btn--small"
            label="Reset"
            onClick={() => (window.location = "/")}
          />
          <ChevronToggle
            className="chevron--right chevron--mobile"
            pointUp={expanded}
            onClick={onExpandedToggle}
          />
        </div>
        <div
          className={"filters__fields " + (expanded ? "fields--expanded" : "")}
        >
          <fieldset>
            <h4>
              <RegionIcon />
              Region
            </h4>
            <RegionCheckboxes onChange={onRegionChange} />
          </fieldset>
          <fieldset>
            <h4>
              <LevelIcon />
              Level
            </h4>
            <LevelCheckboxes onChange={onLevelChange} />
          </fieldset>
          <fieldset>
            <h4>
              <MapsIcon />
              Maps
            </h4>
            <MapCheckboxes onChange={onMapChange} />
          </fieldset>
          <fieldset>
            <h4>
              <AgeIcon />
              Post age
            </h4>
            <AgeRadioButtons onChange={onAgeChange} />
          </fieldset>
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  expanded: PropTypes.bool,
  onExpandedToggle: PropTypes.func,
  onRegionChange: PropTypes.func,
  onLevelChange: PropTypes.func,
  onMapChange: PropTypes.func,
  onAgeChange: PropTypes.func,
};

export default Filters;
