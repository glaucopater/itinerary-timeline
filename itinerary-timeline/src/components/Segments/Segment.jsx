import React from "react";
import Moment from 'react-moment';
import "./Segment.scss"; 

export default class Segment extends React.Component {
    constructor(props){
        super(props);
        this.state= {};
    }

    getFlight(){
        const header = <div className="header">
            <div className="flight-number">{this.props.detail.flight_number}</div>
            <div className="boarding"> 
                Boarding <Moment className="timestamp" format="HH:mm">{this.props.detail.boarding}</Moment> 
            </div>
        </div>;
        const body = <div className="body">{this.props.origin.value} -> {this.props.destination.value}</div>;
        const footer = <div className="footer">
                <div className="gate">Gate {this.props.detail.gate}</div> 
                <div className="seat">Seat {this.props.detail.seat}</div>
                <div className="on-time">On Time</div>
            </div>;
        return <div className={"Segment " + (this.props.type).toLowerCase()}>
                {header}
                {body}
                {footer}
                </div>
    }

    getGround(){
        const address = this.props.origin.type === "STREET_ADDRESS" ? this.props.origin.value.split(",")[0] : this.props.origin.value;
        return (
        <div className={"Segment active " +(this.props.type).toLowerCase()}>
            <div className="from">Pick up from</div>
            {address}
        </div>)
    }

    getAirport(){
        const body = <div className="body">{this.props.origin.value} Airport</div>;
        const busyStatus = this.props.detail.busyness_index ? <div className="busy">Busy</div> : null;
        const terminal = "Terminal C";
        const footer = <div className="footer">{terminal}{busyStatus}</div>; 
        return <div className={"Segment " +(this.props.type).toLowerCase()}>
            {body}
            {footer}
        </div>
    }

    render(){
        let segment;
        switch(this.props.type){
            case "FLIGHT": segment = this.getFlight(); break;
            case "GROUND": segment = this.getGround(); break;
            case "AIRPORT": segment = this.getAirport(); break;
            default: segment = null;
        }
        let timestamp = this.props.departure*1000;
        return (
        <div className="segment-container">
        <Moment className="timestamp" format="HH:mm">{timestamp}</Moment>  
        {segment}
        </div>)
    }
}
