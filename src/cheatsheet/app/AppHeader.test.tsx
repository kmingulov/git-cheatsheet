import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { AppHeader } from './AppHeader';

Enzyme.configure({adapter: new Adapter()});

describe(AppHeader, () => {
  it('renders correctly', () => {
    const component = mount(<AppHeader/>);
    expect(component).toMatchSnapshot();

    component.setProps({ prop: 'value' });
    expect(component).toMatchSnapshot();
  });
});
