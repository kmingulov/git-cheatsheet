import React, { Component, ReactElement } from 'react';
import { Container } from 'react-bootstrap';

import { AppHeader } from './AppHeader';
import { CommandPage } from './pages';

import './App.css';

const initialState = { searchTerm: '' };
type State = Readonly<typeof initialState>;

export class App extends Component<object, State> {
  public readonly state: State = initialState;

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
