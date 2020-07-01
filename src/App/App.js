import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Chat from '../Chat/Chat';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Switch>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
