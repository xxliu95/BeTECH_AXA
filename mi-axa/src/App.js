import './App.css';
import React from 'react';
import Home from './components/Home';
import Centro from './components/Centro';
import Especialidad from './components/Especialidad';
import FormPAS from './components/FormPAS';
import CrearCuadroMedico from './components/CrearCuadroMedico';
import BuscarCentro from './components/BuscarCentro';
import ActualizarCuadroMedico from './components/ActualizarCuadroMedico';
import BuscarCuadroMedico from './components/BuscarCuadroMedico';
import MostrarCuadroMedico from './components/MostrarCuadroMedico';
import FormCentroSanitario from './components/FormCentroSanitario';
import FormMedico from './components/FormMedico';

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
      <Route path="/CrearCuadroMedico/">
          <CrearCuadroMedico/>
      </Route>
      <Route path="/BuscarCentro/">
          <BuscarCentro/>
      </Route>
      <Route path="/ActualizarCuadroMedico/">
          <ActualizarCuadroMedico/>
      </Route>
      <Route path="/BuscarCuadroMedico/">
          <BuscarCuadroMedico/>
      </Route>
      <Route path="/MostrarCuadroMedico/">
          <MostrarCuadroMedico/>
      </Route>
      <Route path="/FormCentroSanitario/">
          <FormCentroSanitario/>
      </Route>
      <Route path="/FormMedico/">
          <FormMedico/>
      </Route>
      </Router>
    );
  }
}

export default App;
