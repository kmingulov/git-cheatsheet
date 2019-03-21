import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Command, CommandGroup } from 'cheatsheet/command';
import { CommandStore } from 'cheatsheet/command-store';

import { CommandTable } from './CommandTable';

Enzyme.configure({adapter: new Adapter()});

jest.mock('./CommandGroupTable');

class CommandStoreStub implements CommandStore {
  public getAll(): ReadonlyArray<CommandGroup> {
    return [
      new CommandGroup('basic', 'Basic Commands', []),
      new CommandGroup('advanced', 'Advanced Commands', []),
    ];
  }
  public search(searchTerm: string): ReadonlyArray<Command> {
    return [ new Command('cmd-1', [], []) ];
  }
}

describe(CommandTable, () => {
  let store: CommandStore;
  let getAllSpy: jest.SpyInstance;
  let searchSpy: jest.SpyInstance;

  beforeEach(() => {
    store = new CommandStoreStub();
    getAllSpy = jest.spyOn(store, 'getAll');
    searchSpy = jest.spyOn(store, 'search');
  });

  it('renders full list of commands when searchTerm isn\'t present', () => {
    const component = mount(<CommandTable store={ store }/>);

    expect(component).toMatchSnapshot();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(searchSpy).not.toHaveBeenCalled();
  });

  it('renders found commands when searchTerm is present', () => {
    const component = mount(<CommandTable store={ store } searchTerm='search'/>);

    expect(component).toMatchSnapshot();
    expect(getAllSpy).not.toHaveBeenCalled();
    expect(searchSpy).toHaveBeenCalledTimes(1);
    expect(searchSpy).toHaveBeenCalledWith('search');
  });
});
