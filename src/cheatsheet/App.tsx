import React, { Component, ReactElement } from 'react';
import { Container, Navbar } from 'react-bootstrap';

import CommandTable from './command-table/CommandTable';
import commands from './commands';

import './App.css';

class App extends Component {
  public render(): ReactElement {
    return (
      <div>
        <Navbar bg='primary' sticky='top'>
          <Container className='header'>
            <Navbar.Brand>Git Cheatsheet</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className='mainContent'>
          <CommandTable groups={ commands }/>
        </Container>
      </div>
    );
  }
}

export default App;
