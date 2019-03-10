import React, { Component, ReactElement } from 'react';
import { Container, Navbar } from 'react-bootstrap';

import { CommandStore } from './command-store/CommandStore';
import CommandTable from './command-table/CommandTable';
import commands from './commands';

import './App.css';

const store = new CommandStore(commands);

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
          <CommandTable store={ store }/>
        </Container>
      </div>
    );
  }
}

export default App;
