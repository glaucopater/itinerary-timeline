import React from 'react';
import { shallow } from 'enzyme'; 
import Traveler from './Traveler'; 
import fakeProps from 'react-fake-props';

describe('Traveler', () => {   
    const props = fakeProps('./src/components/Traveler/Traveler.jsx');
    const traveler = shallow(<Traveler {...props}/>);
    it('renders properly', () => {
        expect(traveler).toMatchSnapshot();
    });  
});