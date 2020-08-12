import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Funds from "./Funds";
import Fund from "../Fund/Fund";

configure({ adapter: new Adapter() });

describe('Component Funds', () => {
    it('Fund Checking', () => {
        const wrapper = shallow(<Funds />);
        expect(wrapper.find(Fund).length).toBe(2);
    })
});