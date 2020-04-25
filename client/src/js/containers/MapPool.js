import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Badge from "../components/Badge";

const MapPool = (props) => {
  const { maps, allMaps } = props;

  let sortedMaps;
  if (!Array.isArray(maps) || maps.length < 1) {
    // No maps are given
    sortedMaps = ["any"];
  } else if (allMaps.every((map) => maps.includes(map))) {
    // All known maps are given
    sortedMaps = ["any"];
  } else if (typeof maps === "string") {
    // One map is given
    sortedMaps = [maps]; // single element array
  } else {
    // Some maps are given
    sortedMaps = maps.sort();
  }

  return sortedMaps.map((map, i) => <Badge key={i}>{map}</Badge>);
};

function mapStateToProps(state) {
  return {
    allMaps: state.mapNames,
  };
}

MapPool.propTypes = {
  maps: PropTypes.array,
};
MapPool.defaultProps = {
  maps: ["any"],
};

export default connect(mapStateToProps)(MapPool);
