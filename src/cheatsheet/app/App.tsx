import React, { Component, ReactElement } from 'react';
import { Container } from 'react-bootstrap';

import { AppHeader } from './AppHeader';

import { AboutModal } from './modals';
import { CommandPage } from './pages';

import './App.css';

type State = Readonly<{ aboutModalShown: boolean }>;

/**
 * Main application component.
 * @inheritdoc
 */
export class App extends Component<{}, State> {
  public state: State = { aboutModalShown: false };

  public render(): ReactElement {
    return (
      <>
        <AboutModal shown={ this.state.aboutModalShown } onClose={ this.hideAbout }/>
        <AppHeader onAbout={ this.showAbout }/>
        <Container className='mainContent'>
          <CommandPage/>
        </Container>
      </>
    );
  }

  private showAbout = () => {
    this.setState({ aboutModalShown: true });
  }

  private hideAbout = () => {
    this.setState({ aboutModalShown: false });
  }
}
