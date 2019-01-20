import React from "react";
import Moment from 'react-moment';
import classnames from 'classnames';
import "./Segment.scss"; 

export default class Segment extends React.Component {
    constructor(props){
        super(props);
        this.state= {};
    }

    getGround(){
        const address = this.props.origin.type === "STREET_ADDRESS" ? this.props.origin.value.split(",")[0] : this.props.origin.value;
        return (
        <div className={"info " +(this.props.type).toLowerCase()}>
            <div className="from">Pick up from</div>
            {address}
        </div>)
    }

    getAirport(){
        const body = <p className="airport-code">{this.props.origin.value} Airport</p>;
        const busyStatus = this.props.detail.busyness_index ? <div className="busy-indicator">Busy</div> : null;
        const terminal = <p className="terminal">Terminal C</p>;
        const footer = <div className="footer">{terminal}{busyStatus}</div>; 
        return <div className={"info " +(this.props.type).toLowerCase()}>
            {body}
            {footer}
        </div>
    }

    getFlight(){
        const header = <div className="header">
            <div className="flight-number">{this.props.detail.flight_number}</div>
            <div className="boarding"> 
                Boarding <Moment className="timestamp" format="HH:mm">{this.props.detail.boarding*1000}</Moment> 
            </div>
        </div>;
        const bodySeparator = <span className="fa fa-plane"></span>;
        const body = <div className="body">{this.props.origin.value}{bodySeparator}{this.props.destination.value}</div>;
        const footer = <div className="footer">
                <div className="gate">Gate {this.props.detail.gate}</div> 
                <div className="seat">Seat {this.props.detail.seat}</div>
                <div className="on-time">On Time</div>
            </div>;
        return <div className={(this.props.type).toLowerCase()}>
                {header}
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
        const timestamp = this.props.departure*1000;
        const classNames = classnames({
            Segment: true,
            active: this.props.type === "GROUND" 
        });
        return (
        <li className={classNames}>
            <span className="timestamp">
                <Moment format="HH:mm">{timestamp}</Moment>  
            </span>
            {segment}
        </li>)
    }
}
