import React from "react";
import PropTypes from "prop-types";

const Location = ({ location }) => {
  return (
    <div>
      <h2> {location.name} </h2>
      <ul>
        <li>
          <b> Type: </b> {location.type}
        </li>
        <li>
          <b>Dimension: </b> {location.dimension}
        </li>
        <li>
          <b>Residents: </b> {location.residents.length}
        </li>
      </ul>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired,
    residents: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Location;
