import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Especialidad from './Especialidad';
import Centro from './Centro';

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
              <Button variant="primary" className="text-center">Dar de alta PAS</Button>{' '}
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
          <Row>
          <Especialidad/>
          </Row>
          <Row>
            <Centro/>
          </Row>
        </Container>


    );
  }
}
  
export default Home;