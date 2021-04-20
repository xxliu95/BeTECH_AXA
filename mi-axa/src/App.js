import './App.css';
import React from 'react';
import Home from './components/Home';
import Centro from './components/Centro';
import Especialidad from './components/Especialidad';
import FormPAS from './components/FormPAS';
import BuscarCentro from './components/BuscarCentro';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
      <Route path="/" exact>
          <Home />
      </Route>
      <Route path="/Centro/">
          <Centro/>
      </Route>
      <Route path="/Especialidad/">
          <Especialidad/>
      </Route>
      <Route path="/FormPAS/">
          <FormPAS/>
      </Route>
      <Route path="/BuscarCentro/">
          <BuscarCentro/>
      </Route>
      </Router>
    );
  }
}

export default App;
