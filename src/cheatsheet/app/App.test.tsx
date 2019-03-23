import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { App } from './App';

jest.mock('./AppHeader');
jest.mock('./modals/AboutModal');
jest.mock('./pages/CommandPage');

Enzyme.configure({adapter: new Adapter()});

describe(App, () => {
  it('renders correctly', () => {
    const component = mount(<App/>);
    expect(component).toMatchSnapshot();
  });
});
