import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Command, CommandGroup } from 'cheatsheet/command';

import { CommandGroupTable } from './CommandGroupTable';

Enzyme.configure({adapter: new Adapter()});

jest.mock('./CommandTableRow');

const cmd = new Command('cmd-1', [], [], []);
const otherCmd = new Command('cmd-2', [], [], []);
const group = new CommandGroup('Basic Commands', [cmd, otherCmd]);

describe(CommandGroupTable, () => {
  it('renders correctly', () => {
    const component = mount(<CommandGroupTable group={ group }/>);
    expect(component).toMatchSnapshot();
  });
});
