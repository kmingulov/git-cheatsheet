import React, { PureComponent, ReactElement } from 'react';

import { Command, CommandPart, CommandPartType } from 'cheatsheet/command';

import './CommandTableRow.css';

const renderPart = (part: CommandPart, key: any): ReactElement | string => {
  if (part.role === CommandPartType.NONE) {
    return part.text;
  }

  const className: string = 'git-' + part.role.toString().toLocaleLowerCase();
  return (
    <span className={ className } key={ key }>
      { part.text }
    </span>
  );
};

const renderCommand = (command: Command): ReactElement => {
  const renderedCommand = (
    <span>
      <span className='git'>git</span>
      { ' ' }
      { command.command.map(renderPart) }
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
        { command.scmBreezeShortcut.map(renderPart) }
      </small>
    </span>
  );
};

interface CommandTableRowProps {
  command: Command;
}

/**
 * Component for rendering a single {@link Command} as a row in {@link CommandTable}.
 */
export class CommandTableRow extends PureComponent<CommandTableRowProps> {
  public render(): ReactElement {
    const { command } = this.props;

    return (
      <tr>
        <td className='git-command-column'>
          { renderCommand(command) }
        </td>
        <td>
          { command.description.map(renderPart) }
        </td>
      </tr>
    );
  }
}
