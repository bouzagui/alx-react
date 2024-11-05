import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
    it('render without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("should render an img element", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists('img')).toEqual(true);
    });
    it('should render an h1 with the text "School dashboard"', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
    })
});
