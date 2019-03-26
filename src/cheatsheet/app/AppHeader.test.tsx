import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Nav } from 'react-bootstrap';

import { AppHeader } from './AppHeader';

jest.mock('react-icons/go', () => ({
  GoMarkGithub: () => <div/>,
}));

Enzyme.configure({adapter: new Adapter()});

class HitCounter {
  public counter: number = 0;

  public hit = (): void => {
    this.counter++;
  }
}

describe(AppHeader, () => {
  it('renders correctly', () => {
    const component = mount(<AppHeader onAbout={ () => undefined }/>);
    expect(component).toMatchSnapshot();
  });

  it('hits the callback when clicking About', () => {
    const hitCounter = new HitCounter();

    const component = mount(<AppHeader onAbout={ hitCounter.hit }/>);
    expect(component).toMatchSnapshot();
    expect(hitCounter.counter).toEqual(0);

    component
      .find(Nav.Link)
      .filter({ id: 'about-link' })
      .simulate('click');

    expect(component).toMatchSnapshot();
    expect(hitCounter.counter).toEqual(1);
  });

  it('re-renders when props are changed', () => {
    const component = mount(<AppHeader onAbout={ () => undefined }/>);

    const hitCounter = new HitCounter();

    component.setProps({ onAbout: hitCounter.hit });
    component
      .find(Nav.Link)
      .filter({ id: 'about-link' })
      .simulate('click');

    expect(hitCounter.counter).toEqual(1);
  });
});
