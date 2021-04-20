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
            <Link to="/FormPAS/"><Button variant="primary" className="text-center">
                Dar de alta PAS
              </Button>{' '}</Link>
            </Col>
            <Col>
              <Link to="/FormCentroSanitario/"><Button variant="primary" className="text-center">
                Dar de alta Centro Sanitario
              </Button>{' '}</Link>
            </Col>
          </Row>
          <Row>
            
            <Col>
              <Link to="/FormMedico/"><Button variant="primary" className="text-center">
                Dar de alta médico
              </Button>{' '}</Link>
            </Col>
            <Col>
              <Link to="/CrearCuadroMedico/"><Button variant="primary" className="text-center">Crear Cuadro Medico</Button>{' '}</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="text-center">Visualizar Cuadros Médicos</Button>{' '}
            </Col>
            <Col>
              <Link to="/BuscarCuadroMedico/"><Button variant="primary" className="text-center">Buscar, modificar y eliminar cuadro medico</Button>{' '}</Link>
            </Col>
          </Row>
          <Row>
            <Col>
            <Link to="/BuscarCentro/"><Button variant="primary" className="text-center">
                Buscar Centro Sanitario
              </Button>{' '}</Link>
            </Col>
          </Row>
        </Container>


    );
  }
}
  
export default Home;