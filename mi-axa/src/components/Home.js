import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Especialidad from './Especialidad';
import Centro from './Centro';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
        <Container>
          <Row>
            <h1>AXA BeTECH</h1>
          </Row>
          <Row>
            <h2>¿Qué quieres hacer?</h2>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="text-center">
                <Link to="/FormPAS/">Dar de alta PAS</Link>
              </Button>{' '}
            </Col>
            <Col>
              <Button variant="primary" className="text-center">Dar de alta Centro Sanitario</Button>{' '}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="text-center">Dar de alta médico</Button>{' '}
            </Col>
            <Col>
              <Button variant="primary" className="text-center">Crear Cuadro Médico</Button>{' '}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="text-center">Visualizar Cuadros Médicos</Button>{' '}
            </Col>
            <Col>
              <Button variant="primary" className="text-center">Buscar, modificar y eliminar Cuadro Médico</Button>{' '}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="text-center">Buscar Centro Sanitario</Button>{' '}
            </Col>
          </Row>
        </Container>


    );
  }
}
  
export default Home;