import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RadioGroup from "../components/RadioGroup";

const RegionRadioButtons = ({ regions, onChange }) => {
  const items = regions.map((region) => {
    return {
      value: region,
      label: region,
    };
  });
  return (
    <RadioGroup items={items} defaultItem={"NA West"} onChange={onChange} />
  );
};

RegionRadioButtons.propTypes = {
  onChange: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    regions: state.regions,
  };
}

export default connect(mapStateToProps)(RegionRadioButtons);
