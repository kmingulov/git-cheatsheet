import React, { Component, ReactElement } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';

type Props = Readonly<{ onAbout: () => void }>;

/**
 * Header component with application's name.
 * @inheritdoc
 */
export class AppHeader extends Component<Props> {
  public shouldComponentUpdate(nextProps: Props): boolean {
    return this.props.onAbout !== nextProps.onAbout;
  }

  public render(): ReactElement {
    return (
      <Navbar bg='primary' sticky='top'>
        <Container className='header'>
          <Navbar.Brand>Git Cheatsheet</Navbar.Brand>

          <Navbar.Collapse>
            <Nav className='mr-auto'>
              <Nav.Link id='about-link' onClick={ this.props.onAbout }>
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='https://github.com/kmingulov/git-cheatsheet' target='_blank'>
                <GoMarkGithub size={ 24 }/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
