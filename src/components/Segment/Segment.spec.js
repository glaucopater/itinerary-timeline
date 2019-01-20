import React from 'react';
import { shallow } from 'enzyme'; 
import Segment from './Segment';
import fakeProps from 'react-fake-props';

describe('Segment', () => { 
    const props = fakeProps('./src/components/Segment/Segment.jsx');
    const segment = shallow(<Segment {...props}/>);
    it('renders properly', () => {
        expect(segment).toMatchSnapshot();
    });  
});