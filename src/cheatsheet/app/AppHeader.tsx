import React, { Component, ReactElement } from 'react';
import { Container, Navbar } from 'react-bootstrap';

/**
 * Header component with application's name.
 * @inheritdoc
 */
export class AppHeader extends Component {
  public shouldComponentUpdate(): boolean {
    return false;
  }

  public render(): ReactElement {
    return (
      <Navbar bg='primary' sticky='top'>
        <Container className='header'>
          <Navbar.Brand>Git Cheatsheet</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
