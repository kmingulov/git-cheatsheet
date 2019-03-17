import React, { PureComponent, ReactElement } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { MdClear, MdSearch } from 'react-icons/md';

import commands from 'cheatsheet/command-data/commands';
import { CommandStore, LunrCommandStore } from 'cheatsheet/command-store';
import { CommandTable } from 'cheatsheet/command-table';
import { staticComponent } from 'cheatsheet/util/componentUtils';

const StaticInputGroupPrepend = staticComponent(InputGroup.Prepend);
const StaticInputGroupAppend = staticComponent(InputGroup.Append);

type State = Readonly<{ searchTerm: string }>;
export class CommandPage extends PureComponent<object, State> {
  public readonly state: State = { searchTerm: '' };

  private store: CommandStore = new LunrCommandStore(commands);

  public render(): ReactElement {
    const { searchTerm } = this.state;

    return (
      <div>
        <InputGroup className='searchBox'>
          <StaticInputGroupPrepend>
            <InputGroup.Text>
              <MdSearch/>
            </InputGroup.Text>
          </StaticInputGroupPrepend>
          <FormControl
            value={ searchTerm }
            placeholder='Search…'
            onChange={ this.onChange }
          />
          <StaticInputGroupAppend>
            <Button
              variant='secondary'
              onClick={ this.onClear }
            >
              <MdClear/>
            </Button>
          </StaticInputGroupAppend>
        </InputGroup>

        <CommandTable store={ this.store } searchTerm={ searchTerm }/>
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
