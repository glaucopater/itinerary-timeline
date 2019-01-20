import React from 'react';
import { shallow } from 'enzyme'; 
import ItineraryContainer from './ItineraryContainer'; 
import fakeProps from 'react-fake-props';

describe('ItineraryContainer', () => {
    let props = fakeProps('./src/containers/ItineraryContainer/ItineraryContainer.jsx');
    props.itinerary = {
        segments: []
    }
    const itineraryContainer = shallow(<ItineraryContainer {...props}/>);
    it('renders properly', () => {
        expect(itineraryContainer).toMatchSnapshot();
    });  
});