import React, { Component, ReactElement } from 'react';

import { CommandStore } from '../command-store/CommandStore';
import { CommandGroup } from '../command/CommandGroup';
import { CommandGroupTable } from './CommandGroupTable';

interface CommandTableProps {
  store: CommandStore;
}

class CommandTable extends Component<CommandTableProps> {
  public render(): ReactElement {
    const groups: CommandGroup[] = this.props.store.getAll();
    return (
      <div>
        { groups.map(group => <CommandGroupTable group={ group } key={ group.title }/>) }
      </div>
    );
  }
}

export default CommandTable;
