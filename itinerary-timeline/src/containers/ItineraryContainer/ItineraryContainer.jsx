import React from "react"; 
import Overview from '../../components/Overview/Overview';
import Itinerary from '../../components/Itinerary/Itinerary';  
import './ItineraryContainer.scss';

export default class ItineraryContainer extends React.Component { 
    render(){ 
        return <div className="ItineraryContainer">
            <Overview />
            <Itinerary {...this.props.itinerary}/>
        </div>
    }
}