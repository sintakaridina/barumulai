import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Succes from './view/Succes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path="/" component={Succes}/>
        
      </Switch>
        
      </div>
    );
  }
}

export default App;
