import React from 'react';
import { shallow } from 'enzyme'; 
import Overview from './Overview';  

describe('Overview', () => {  
    const overview = shallow(<Overview/>);
    it('renders properly', () => {
        expect(overview).toMatchSnapshot();
    });  
});