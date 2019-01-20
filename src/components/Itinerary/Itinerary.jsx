import React from "react";
import "./Itinerary.scss";
import Segment from '../Segment/Segment';
import PropTypes from 'prop-types';

export default class Itinerary extends React.Component {
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

Itinerary.propTypes = {
    segments: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        segment_id: PropTypes.string.isRequired, 
        departure: PropTypes.number.isRequired
    })).isRequired
}