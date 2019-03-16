import React, { Component, ReactElement } from 'react';
import { Badge, Table } from 'react-bootstrap';

import { CommandGroup } from 'cheatsheet/command/CommandGroup';
import { CommandTableRow } from './CommandTableRow';

interface CommandGroupTableProps {
  group: CommandGroup;
}

export class CommandGroupTable extends Component<CommandGroupTableProps> {
  public render(): ReactElement {
    const { group } = this.props;

    return (
      <div>
        <h4>
          { group.title }
          { ' ' }
          <Badge variant='secondary'>{ group.commands.length }</Badge>
        </h4>
        <Table striped bordered>
          <tbody>
            { group.commands.map((command, i) => (
              <CommandTableRow command={ command } key={ i }/>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
