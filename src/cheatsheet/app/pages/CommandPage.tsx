import React, { PureComponent, ReactElement } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { MdClear, MdSearch } from 'react-icons/md';

import commands from 'cheatsheet/command-data/commands';
import { CommandStore, LunrCommandStore } from 'cheatsheet/command-store';
import { CommandTable } from 'cheatsheet/command-table';
import { staticComponent } from 'cheatsheet/util/componentUtils';

const StaticInputGroup = staticComponent(InputGroup);

type State = Readonly<{ searchTerm: string }>;
export class CommandPage extends PureComponent<object, State> {
  public readonly state: State = { searchTerm: '' };

  private store: CommandStore = new LunrCommandStore(commands);

  public render(): ReactElement {
    return (
      <div>
        <StaticInputGroup className='searchBox'>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <MdSearch/>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder='Search…'
            onChange={ this.onChange }
          />
          <InputGroup.Append>
            <Button
              variant='secondary'
              onClick={ this.onClear }
            >
              <MdClear/>
            </Button>
          </InputGroup.Append>
        </StaticInputGroup>

        <CommandTable store={ this.store } searchTerm={ this.state.searchTerm }/>
      </div>
    );
  }

  private onChange = (event: any): void => {
    this.setState({ searchTerm: event.target.value });
  }

  private onClear = (): void => {
    this.setState({ searchTerm: '' });
  }
}
