import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { App } from './App';
import { AppHeader } from './AppHeader';
import { AboutModal } from './modals';

jest.mock('./AppHeader');
jest.mock('./modals');
jest.mock('./pages');

Enzyme.configure({adapter: new Adapter()});

describe(App, () => {
  it('renders correctly', () => {
    const component = mount(<App/>);
    expect(component).toMatchSnapshot();
  });

  it('shows and hides AboutModal', () => {
    const component = mount(<App/>);
    expect(component).toMatchSnapshot();

    component
      .find(AppHeader)
      .prop('onAbout')();
    component.update();

    expect(component).toMatchSnapshot();

    component
      .find(AboutModal)
      .prop('onClose')();
    component.update();

    expect(component).toMatchSnapshot();
  });
});
