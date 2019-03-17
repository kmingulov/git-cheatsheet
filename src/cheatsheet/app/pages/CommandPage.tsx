import React, { Component, ReactElement } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import commands from 'cheatsheet/command-data/commands';
import { CommandStore } from 'cheatsheet/command-store';
import { CommandTable } from 'cheatsheet/command-table';
import { staticComponent } from 'cheatsheet/util/componentUtils';

const store = new CommandStore(commands);

type State = Readonly<{ searchTerm: string }>;

const StaticInputGroup = staticComponent(InputGroup);

export class CommandPage extends Component<object, State> {
  public readonly state: State = { searchTerm: '' };

  public render(): ReactElement {
    return (
      <div>
        <StaticInputGroup className='searchBox'>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FaSearch/>
            </InputGroup.Text>
          </InputGroup.Prepend>
            <FormControl
              placeholder='Search…'
              onChange={ (event: any) => this.setState({ searchTerm: event.target.value }) }
            />
        </StaticInputGroup>

        <CommandTable store={ store } searchTerm={ this.state.searchTerm }/>
      </div>
    );
  }
}
