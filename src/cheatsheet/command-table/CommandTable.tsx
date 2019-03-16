import React, { Component, ReactElement } from 'react';

import { CommandGroup } from 'cheatsheet/command';
import { CommandStore } from 'cheatsheet/command-store';
import { CommandGroupTable } from './CommandGroupTable';

interface CommandTableProps {
  store: CommandStore;
  searchTerm?: string;
}

export class CommandTable extends Component<CommandTableProps> {
  public render(): ReactElement {
    const { store, searchTerm } = this.props;

    const groups: CommandGroup[] = searchTerm != null && searchTerm !== ''
      ? [ new CommandGroup('Search Results', store.search(searchTerm)) ]
      : store.getAll();

    return (
      <div>
        { groups.map(group => <CommandGroupTable group={ group } key={ group.title }/>) }
      </div>
    );
  }
}
