import React, { Component } from 'react';

import { CommandGroup } from '../command/CommandGroup';
import { CommandGroupTable } from './CommandGroupTable';

interface CommandTableProps {
  groups: CommandGroup[]
}

class CommandTable extends Component<CommandTableProps> {
  render() {
    return (
      <div>
        { this.props.groups.map(group => <CommandGroupTable group={ group } key={ group.title }/>) }
      </div>
    );
  }
}

export default CommandTable;
