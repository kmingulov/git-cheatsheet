import React, { Component, ReactElement } from 'react';

import { Command } from '../command/Command';
import { CommandPart } from '../command/CommandPart';

const renderPart = (part: CommandPart | string, insertSpaces: boolean, key: any): ReactElement | string => {
  if (typeof(part) === 'string') {
    return (insertSpaces ? ' ' : '') + part;
  }

  const className: string = 'git-' + part.role.toString().toLocaleLowerCase();

  if (!insertSpaces) {
    return (
      <span className={ className } key={ key }>
        { part.text }
      </span>
    );
  }

  return (
    <span key={ key }>
      { ' ' }
      <span className={ className }>
        { part.text }
      </span>
    </span>
  );
};

const renderCommand = (command: Command): ReactElement => {
  const renderedCommand = (
    <span>
      <span className='git'>git</span>
      { command.commandParts.map((part, i) => renderPart(part, true, i)) }
    </span>
  );

  if (command.scmBreezeShortcut.length === 0) {
    return renderedCommand;
  }

  return (
    <span>
      { renderedCommand }
      <br/>
      <small>
        { command.scmBreezeShortcut.map((part, i) => renderPart(part, true, i)) }
      </small>
    </span>
  );
};

interface CommandTableRowProps {
  command: Command;
}

export class CommandTableRow extends Component<CommandTableRowProps> {
  public render(): ReactElement {
    const { command } = this.props;

    return (
      <tr>
        <td className='git-command-column'>
          { renderCommand(command) }
        </td>
        <td>
          { command.descriptionParts.map((part, i) => renderPart(part, false, i)) }
        </td>
      </tr>
    );
  }
}
