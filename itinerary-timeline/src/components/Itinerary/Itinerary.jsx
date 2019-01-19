import React from "react";
import "./Itinerary.scss";
import Overview from '../Overview/Overview'; 
import Segment from '../Segments/Segment';

export default class Itinerary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        const overview = <Overview origin_iata={this.props.origin_iata} destination_iata={this.props.destination_iata} />; 
        const segments = this.props.segments.map((seg,key)=>{return <Segment key={key} {...seg}/>});
        return <div className="Itinerary">
                {overview} 
                {segments}
            </div>
    }
}
