import React from 'react';
import Footer from './Footer';
import {shallow} from enzyme;
import { getFullYear, getFullCopy} from '/..utills/utills';

describe('<Footer />', () => {
    it('renders without crahing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('should render the text Copyright', () => {
        const wrapper = hallow(<Footer />);
        expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFullCopy()}`);
    });
});
