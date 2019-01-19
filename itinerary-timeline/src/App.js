import React, { Component } from 'react'; 
import ItineraryContainer from './containers/ItineraryContainer/ItineraryContainer';
import { itinerary } from './data';

class App extends Component {
  render() {
    console.log(itinerary);
    return (
      <div className="App"> 
        <ItineraryContainer itinerary={itinerary}/>
      </div>
    );
  }
}

export default App;
