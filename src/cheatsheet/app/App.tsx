import React, { Component, ReactElement } from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import commands from 'cheatsheet/command-data/commands';
import { CommandStore } from 'cheatsheet/command-store';
import { CommandTable } from 'cheatsheet/command-table';

import { AppHeader } from './AppHeader';

import './App.css';

const store = new CommandStore(commands);

const initialState = { searchTerm: '' };
type State = Readonly<typeof initialState>;

export class App extends Component<object, State> {
  public readonly state: State = initialState;

  public render(): ReactElement {
    return (
      <div>
        <AppHeader/>

        <Container className='mainContent'>
          <InputGroup className='searchBox'>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaSearch/>
              </InputGroup.Text>
            </InputGroup.Prepend>
              <FormControl
                placeholder='Search…'
                onChange={ (event: any) => this.setState({ searchTerm: event.target.value }) }
              />
          </InputGroup>

          <CommandTable store={ store } searchTerm={ this.state.searchTerm }/>
        </Container>
      </div>
    );
  }
}
