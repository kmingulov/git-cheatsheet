import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { plainComponent } from './plainComponent';

Enzyme.configure({adapter: new Adapter()});

const PlainComponent = plainComponent('SomeComponent');

describe(plainComponent, () => {
  it('uses the given display name', () => {
    expect(PlainComponent.displayName).toEqual('SomeComponent');
  });

  it('renders one child', () => {
    const component = mount(
      <PlainComponent>
        <div></div>
      </PlainComponent>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders two children', () => {
    const component = mount(
      <PlainComponent>
        <div></div>
        <span></span>
      </PlainComponent>,
    );
    expect(component).toMatchSnapshot();
  });
});
