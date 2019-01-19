import React from "react";
import "./Overview.scss"; 

export default function Overview (props) {
    return (
        <div className="Overview">
            <h1 className="header">Overview</h1>
            <div className="from-to">
                {props.origin_iata}-{props.destination_iata} 
            </div>
        </div>) 
}