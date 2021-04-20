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

class CrearCuadroMedico extends React.Component {

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
      <h1>Crear Cuadro Medico</h1>

      <Fragment>
              
              <Container>
                  <form className="row" >
                      <Col>
                          <Row>
                              <Col>
                                  <a>Nombre Cuadro</a>
                              </Col>
                              <Col>
                                  <input type="nombreCuadro"
                                          className="form-control"
                                          name="nombreCuadro"
                                          onChange={this.handleChange} >
                                  </input>
                              </Col>
                          </Row>
                      </Col>
                    </form>
                </Container>

                <ul>
                    <li>{this.state.nombreCuadro}</li>
                </ul>
            </Fragment>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>PAS</th>
            <th>Centro Sanitario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>    <Form.Check type="checkbox" /></td>
            <td>Quirón</td>
            <td>Centro sanitario de Madrid</td>
          </tr>
          <tr>
            <td>    <Form.Check type="checkbox" /></td>
            <td>Quirón</td>
            <td>Centro sanitario de Barcelona</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" type="submit">
        Crear
      </Button>
      </Form>
    );
  }
}

export default CrearCuadroMedico;