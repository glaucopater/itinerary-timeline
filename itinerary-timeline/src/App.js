import React from 'react'; 
import ItineraryContainer from './containers/ItineraryContainer/ItineraryContainer';
import { itinerary } from './data';

const App = () => { 
    return (
      <div className="App"> 
        <ItineraryContainer itinerary={itinerary}/>
      </div>
    );
  
}

export default App;
