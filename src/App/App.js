import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Welcome from '../Welcome/Welcome';
import NotFound from '../NotFound/NotFound';
import Chat from '../Chat/Chat';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>

          <Route path="/notfound">
            <NotFound />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
