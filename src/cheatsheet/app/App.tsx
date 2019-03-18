import React, { Component, ReactElement } from 'react';
import { Container } from 'react-bootstrap';

import { AppHeader } from './AppHeader';
import { CommandPage } from './pages';

import './App.css';

export class App extends Component {
  public render(): ReactElement {
    return (
      <div>
        <AppHeader/>
        <Container className='mainContent'>
          <CommandPage/>
        </Container>
      </div>
    );
  }
}
