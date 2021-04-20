import './App.css';
import React from 'react';
import Home from './components/Home';
import Centro from './components/Centro';
import Especialidad from './components/Especialidad';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from "react-router";

let routes = (
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/Centro">
      <Centro />
    </Route>
    <Route path="/Especialidad">
      <Especialidad />
    </Route>
    {/* <Route>
      <NoMatch />
    </Route> */}
  </Switch>
);


class App extends React.Component {
  render() {
    return (
      <Home/>
    );
  }
}

export default App;
