import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, { ReactElement } from 'react';

import { Command, command, none } from 'cheatsheet/command';

import { CommandTableRow } from './CommandTableRow';

Enzyme.configure({adapter: new Adapter()});

const cmdWithShortcut = new Command(
  'cmd-1',
  [ command('commit'), none(' '), none('-m'), none('message') ],
  [ none('Commit changes in the staging area with the given message.') ],
  [ command('gc'), none(' '), none('-m'), none('message') ],
);

const cmdWithoutShortcut = new Command(
  'cmd-1',
  [ command('commit'), none(' '), none('-m'), none('message') ],
  [ none('Commit changes in the staging area with the given message.') ],
);

const renderRow = (cmd: Command): ReactElement => {
  return (
    <table>
      <tbody>
        <CommandTableRow command={ cmd }/>
      </tbody>
    </table>
  );
};

describe(CommandTableRow, () => {
  it('renders correctly a command with shortcut', () => {
    const component = mount(renderRow(cmdWithShortcut));
    expect(component).toMatchSnapshot();
  });

  it('renders correctly a command without shortcut', () => {
    const component = mount(renderRow(cmdWithoutShortcut));
    expect(component).toMatchSnapshot();
  });
});
