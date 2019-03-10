import React, { Component, ReactElement } from 'react';

import { CommandGroup } from '../command/CommandGroup';
import { CommandGroupTable } from './CommandGroupTable';

interface CommandTableProps {
  groups: CommandGroup[];
}

class CommandTable extends Component<CommandTableProps> {
  public render(): ReactElement {
    return (
      <div>
        { this.props.groups.map(group => <CommandGroupTable group={ group } key={ group.title }/>) }
      </div>
    );
  }
}

export default CommandTable;
