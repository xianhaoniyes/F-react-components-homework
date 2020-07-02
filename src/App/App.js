import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Welcome from '../Welcome/Welcome';
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
        <Route exact path="/">
          <Welcome />
        </Route>
      </div>
    );
  }
}

export default App;
