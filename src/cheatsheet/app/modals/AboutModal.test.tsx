import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { AboutModal } from './AboutModal';

jest.mock('react-bootstrap', () => {
  const { plainComponent } = require('cheatsheet/util/component-test-utils');

  const Modal = plainComponent('Modal');
  Modal.Header = plainComponent('Modal.Header');
  Modal.Title = plainComponent('Modal.Title');
  Modal.Body = plainComponent('Modal.Body');
  Modal.Footer = plainComponent('Modal.Footer');

  return {
    Button: plainComponent('Button'),
    Modal,
  };
});

jest.mock('cheatsheet/command-data/commands', () => {
  const { Command, CommandGroup } = require('cheatsheet/command');

  return [
    new CommandGroup('basic', 'Basic', [
      new Command('basic-1', [], [], []),
    ]),
    new CommandGroup('advanced', 'Advanced', [
      new Command('advanced-1', [], [], []),
      new Command('advanced-2', [], [], []),
    ]),
  ];
});

Enzyme.configure({adapter: new Adapter()});

describe(AboutModal, () => {
  process.env.REACT_APP_VERSION = '1.0.0';

  it('renders correctly when shown', () => {
    const component = mount(<AboutModal shown={ true } onClose={ () => undefined }/>);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly when hidden', () => {
    const component = mount(<AboutModal shown={ false } onClose={ () => undefined }/>);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly when redrawn', () => {
    const component = mount(<AboutModal shown={ true } onClose={ () => undefined }/>);
    expect(component).toMatchSnapshot();

    component.setProps({ shown: false });
    expect(component).toMatchSnapshot();
  });
});
