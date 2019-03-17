import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { CommandPage } from './CommandPage';

jest.mock('react-icons/md', () => ({
  MdClear: () => <div/>,
  MdSearch: () => <div/>,
}));
jest.mock('cheatsheet/command-store');
jest.mock('cheatsheet/command-table');

Enzyme.configure({adapter: new Adapter()});

describe(CommandPage, () => {
  it('renders correctly', () => {
    const component = mount(<CommandPage/>);
    expect(component).toMatchSnapshot();
  });

  it('allows searching', () => {
    const component = mount(<CommandPage/>);
    expect(component).toMatchSnapshot();

    component.find('FormControl').simulate('change', {
      target: {value: 'search term'},
    });
    expect(component).toMatchSnapshot();

    component.find('Button').simulate('click');
    expect(component).toMatchSnapshot();
  });
});
