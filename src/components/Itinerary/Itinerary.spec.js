import React from 'react';
import { shallow } from 'enzyme'; 
import Itinerary from './Itinerary';
import fakeProps from 'react-fake-props'; 

describe('Itinerary', () => { 
    const props = fakeProps('./src/components/Itinerary/Itinerary.jsx'); 
    const itinerary = shallow(<Itinerary {...props}/>);
    it('renders properly', () => {
        expect(itinerary).toMatchSnapshot();
    });  
});