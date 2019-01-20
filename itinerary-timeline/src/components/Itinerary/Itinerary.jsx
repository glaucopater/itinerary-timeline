import React from "react";
import "./Itinerary.scss";
import Segment from '../Segments/Segment';

export default class Itinerary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getFromTo(origin,destination){
        return <h2 className="from-to">{origin} - {destination}</h2>
    }
    render() {  
        const segments = this.props.segments.map((seg,key)=>{return <Segment key={key} {...seg}/>});
        const fromTo = this.getFromTo(this.props.origin_iata,this.props.destination_iata);
        return <section className="Itinerary">
                {fromTo}
                <ul className="segment-list">
                    {segments}
                </ul>
            </section>
    }
}
