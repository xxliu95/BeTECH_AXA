import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, {Fragment, useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class VisualizarCuadroMedico extends React.Component {

    constructor(props) {
      super(props);
      this.state={
          nombreCuadro: '',
      }
  }
  
   handleChange = (e) => {
       const { name, value } = e.target
       this.setState({ [name]: value })
   }
  
    render() {
      return (
        <Form>
            <h1>Cuadro médico</h1>
    
            <Fragment>
                    
            </Fragment>

            <Button variant="primary" type="submit">
                    Eliminar
            </Button>
            <Button variant="primary" type="submit">
                    Modificar
            </Button>

            <Link to="/ModificarCuadroMedico/"><Button variant="primary" className="text-center">Modificar</Button>{' '}</Link>

            <Button variant="primary" type="submit">
                    Buscar
            </Button>
        </Form>
            
      );
    }
}

export default VisualizarCuadroMedico;