import React from 'react';
import "./Traveler.scss";
import PropTypes from 'prop-types'

const Traveler = (props) => {
    const { first_name, middle_name, last_name } = props;
    return (
        <div className="Traveler">
            <div className="first_name">{first_name}</div>
            <div className="middle_name">{middle_name}</div>
            <div className="last_name">{last_name}</div>
        </div>)
}

Traveler.propTypes = { 
    first_name: PropTypes.string.isRequired,
    middle_name: PropTypes.string, 
    last_name: PropTypes.string.isRequired
}

export default Traveler