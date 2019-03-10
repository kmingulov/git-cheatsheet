import React, { Component, ReactElement } from 'react';

import { CommandStore } from '../command-store/CommandStore';
import { CommandGroup } from '../command/CommandGroup';
import { CommandGroupTable } from './CommandGroupTable';

interface CommandTableProps {
  store: CommandStore;
  searchTerm?: string;
}

class CommandTable extends Component<CommandTableProps> {
  public render(): ReactElement {
    const { store, searchTerm } = this.props;

    const groups: CommandGroup[] = searchTerm != null && searchTerm !== ''
      ? store.search(searchTerm)
      : store.getAll();

    return (
      <div>
        { groups.map(group => <CommandGroupTable group={ group } key={ group.title }/>) }
      </div>
    );
  }
}

export default CommandTable;
