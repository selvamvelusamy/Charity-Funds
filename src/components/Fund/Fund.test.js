import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Fund from './Fund';

configure({ adapter: new Adapter() });

describe('Component Fund', () => {
    it('Titile Checking', () => {
        const wrapper = shallow(<Fund for={'Balance'}/>);
        expect(wrapper.find('.title').html().length > 25).toBeTruthy();
    })
})