import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, { Component, ReactElement } from 'react';

import { staticComponent } from './staticComponent';

Enzyme.configure({adapter: new Adapter()});

interface CounterInterface {
  count: number;
}

class Counter extends Component implements CounterInterface {
  public count: number = 0;

  public render(): ReactElement {
    this.count++;

    return (
      <div>{ this.count }</div>
    );
  }
}

const StaticCounter = staticComponent(Counter);

describe(staticComponent, () => {
  it('constructs a valid displayName for components with display names', () => {
    expect(StaticCounter.displayName).toEqual('staticComponent(Counter)');
  });

  it('constructs a valid displayName for components without display names', () => {
    const StaticComponent = staticComponent(() => <div/>);
    expect(StaticComponent.displayName).toEqual('staticComponent()');
  });

  it('renders the wrapped component', () => {
    const component = mount(<StaticCounter/>);
    expect(component).toMatchSnapshot();
  });

  it('doesn\'t re-render the wrapped component', () => {
    const component = mount(<StaticCounter/>);
    expect(component).toMatchSnapshot();

    component.setProps({ prop: 'value' });
    expect(component).toMatchSnapshot();
  });
});
