import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CheckboxGroup from "../components/CheckboxGroup";

const RegionCheckboxes = ({ regions, onChange }) => {
  const items = regions.map((region) => {
    return {
      value: region,
      label: region,
    };
  });
  return <CheckboxGroup items={items} onChange={onChange} />;
};

RegionCheckboxes.propTypes = {
  onChange: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    regions: state.regions,
  };
}

export default connect(mapStateToProps)(RegionCheckboxes);
