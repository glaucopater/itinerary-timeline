import React from 'react';
import "./Traveler.scss";

export default function Traveler(props) {

    const { first_name, middle_name, last_name } = props;
    return (
        <div className="Traveler">
            <div className="first_name">{first_name}</div>
            <div className="middle_name">{middle_name}</div>
            <div className="last_name">{last_name}</div>
        </div>)
}