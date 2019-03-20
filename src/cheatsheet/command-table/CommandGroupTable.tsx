import React, { Component, ReactElement } from 'react';
import { Badge, Table } from 'react-bootstrap';

import equal from 'fast-deep-equal';

import { CommandGroup } from 'cheatsheet/command';
import { CommandTableRow } from './CommandTableRow';

interface CommandGroupTableProps {
  group: CommandGroup;
}

/**
 * Component for rendering a {@link CommandGroup} instance.
 */
export class CommandGroupTable extends Component<CommandGroupTableProps> {
  public shouldComponentUpdate(nextProps: Readonly<CommandGroupTableProps>): boolean {
    return !equal(this.props, nextProps);
  }

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
