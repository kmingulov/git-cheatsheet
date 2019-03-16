import React, { Component, ReactElement } from 'react';

import { CommandStore } from 'cheatsheet/command-store/CommandStore';
import { CommandGroup } from 'cheatsheet/command/CommandGroup';
import { CommandGroupTable } from './CommandGroupTable';

interface CommandTableProps {
  store: CommandStore;
  searchTerm?: string;
}

class CommandTable extends Component<CommandTableProps> {
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

export default CommandTable;
