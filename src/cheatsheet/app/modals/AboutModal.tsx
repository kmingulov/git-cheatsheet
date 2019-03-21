import React, { Component, ReactElement } from 'react';
import { Button, Modal } from 'react-bootstrap';

import commands from 'cheatsheet/command-data/commands';

const COMMANDS_COUNT = commands.reduce((counter, group) => counter + group.commands.length, 0);

interface AboutModalProps {
  shown: boolean;
  onClose: () => void;
}

/**
 * Dialog with information about the application.
 * @inheritdoc
 */
export class AboutModal extends Component<AboutModalProps> {
  public shouldComponentUpdate(nextProps: Readonly<AboutModalProps>): boolean {
    return this.props.shown !== nextProps.shown;
  }

  public render(): ReactElement {
    const { shown, onClose } = this.props;

    return (
      <Modal show={ shown } onHide={ onClose }>
        <Modal.Header closeButton>
          <Modal.Title>Git Cheatsheet v{ process.env.REACT_APP_VERSION }</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Git Cheatsheet is an interactive comprehensive cheatsheet which will help you to memorize all these numerous
            git commands!
          </p>

          <p>
            There are currently <b>{ COMMANDS_COUNT }</b> commands in the cheatsheet.
          </p>

          <p>
            Git Cheatsheet is an open-source project, licensed under MIT License and hosted
            on <a href='https://github.com/kmingulov/git-cheatsheet'>GitHub</a>. If you think that the cheatsheet can be
            improved, please fill free to open an issue or submit a pull-request.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='primary' onClick={ onClose }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
