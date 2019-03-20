import React, { PureComponent, ReactElement } from 'react';

import { CommandGroup } from 'cheatsheet/command';
import { CommandStore } from 'cheatsheet/command-store';
import { CommandGroupTable } from './CommandGroupTable';

interface CommandTableProps {
  store: CommandStore;
  searchTerm?: string;
}

/**
 * Component for rendering commands stored in a {@link CommandStore}. This component supports searching via
 * `searchTerm` property.
 */
export class CommandTable extends PureComponent<CommandTableProps> {
  public render(): ReactElement {
    const { store, searchTerm } = this.props;

    const groups = searchTerm != null && searchTerm !== ''
      ? [ new CommandGroup('Search Results', store.search(searchTerm)) ]
      : store.getAll();

    return (
      <div>
        { groups.map(group => <CommandGroupTable group={ group } key={ group.title }/>) }
      </div>
    );
  }
}
